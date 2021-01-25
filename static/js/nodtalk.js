var userColor = "#" + (Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0"));
var sendJson = function() {
  console.log("not started")
}

var autoScroll = true;

function toggleAutoScroll() {
  autoScroll = ((document.getElementById('messages').scrollHeight - document.getElementById('messages').scrollTop - document.getElementById('messages').clientHeight) < 1);
}
function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  })
  // or alternatively
  // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
//Before the script tag containing this code, you must include this script tag:
//<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
//for the encryption logic

var crypt = {
  secret: "admin",
  encrypt: function(clear) {
    // encrypt() : encrypt the given clear text

    var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
    cipher = cipher.toString();
    return cipher;
  },

  decrypt: function(cipher) {
    // decrypt() : decrypt the given cipher text

    var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
    decipher = decipher.toString(CryptoJS.enc.Utf8);
    return decipher;
  }
};

function launchApp() {
  var name = document.getElementById("name").value;
  if (name == false) {
    name = "Unnamed User";
  }
  var channel = document.getElementById("channel").value;
  if (channel == false) {
    channel = "main";
  } else if (channel.charAt(0) == "%") {
    crypt.secret = window.prompt("Enter encryption key:")
    if (crypt.secret == null) {
      crypt.secret = "admin"
    }
  }
  $(".channel-indicator").html("#" + channel);
  $(".name-indicator").html(name);
  connect(name, channel);
  $(".homepage").removeClass('visible');
  $(".homepage").addClass('hidden');
  $(".client").removeClass('hidden');
  $(".client").addClass('visible');
}

$(document).keyup(function(event) {
  if ($(".name").is(":focus") && event.key == "Enter") {
    launchApp();
  }
});

function connect(name, channel) {
  var ws = new WebSocket('wss://j24amtdvi4.execute-api.us-east-1.amazonaws.com/prod');
  sendJson = function sendJson(msg) {
    ws.send(JSON.stringify(msg));
  }
  ws.onopen = function() {
    // subscribe to some channels
    sendJson({
      route: "join",
      data: {
        id: channel,
        team: "lt"
      }
    });

    const tryConnect = () => {
      console.log("Keeping Nod alive...");
      sendJson({
        route: "ping"
      });
    };
    setInterval(tryConnect, 54E4);
  };

  ws.onmessage = function(event) {
    var obj = JSON.parse(event.data);
    var user = clean(crypt.decrypt(obj.message.username));
    var msg = urlify(clean(crypt.decrypt(obj.message.emoji)));
    var color = clean(obj.message.tone);
    if (msg.length > 0) {
      toggleAutoScroll();
      $(".messages").append("<b style='color: " + color + ";'>" + updateTime() + user + ": </b><span>" + msg + "</span><br>");
      if (autoScroll == true) {
        document.getElementById("messages").scrollBy(0, 10000);
      }
    }
  }

  ws.onclose = function(e) {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
    setTimeout(function() {
      connect();
    }, 1000);
  };

  ws.onerror = function(err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket');
    ws.close();
  };
}

function sendMessage() {
	var msg = document.getElementById("message-box").value
	var name = document.getElementById("name").value;
	if (name == false) {
	name = "Unnamed User";
	}
	var channel = document.getElementById("channel").value;
	if (channel == false) {
	channel = "main";
	}
	if (document.getElementById("message-box").value.length == 0) {
	return false;
	}
	sendJson({
	action: "MESSAGE",
	message: {
		id: channel,
		emoji: crypt.encrypt(document.getElementById("message-box").value),
		username: crypt.encrypt(name),
		img: "",
		tone: userColor
	}
	});
	$(".messages").append("<b style='color: " + userColor + ";'>" + updateTime() + "You: </b><span>" + urlify(msg) + "</span><br>");
	document.getElementById("message-box").value = "";
	document.getElementById("messages").scrollBy(0, 10000);
};

$(document).keyup(function(event) {
  if ($(".message-box").is(":focus") && event.key == "Enter") {
    sendMessage();
  }
});

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return "[" + hours + ":" + minutes + "] ";
}

function clean(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function(c) {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      case ':':
        return '&#58;';
      case ';':
        return '&#59;';
      case '{':
        return '&#123;';
      case '}':
        return '&#125;';
      case ',':
        return '&#44;';
    }
  });
}