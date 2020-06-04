var player = null;
var PreMsg = new Array();
var MsgNum = new Array();
var fullNum = 0;
is자음 = function(a) {
    Inum_a = -1;
    switch(a) { //자음
        case "ᄀ":
        case "ᆨ":
        case "ㄱ": Inum_a = 0; break
        case 'ᄁ':
        case "ᆩ":
        case "ㄲ": Inum_a = 1; break
        case "ᄂ":
        case "ᆫ":
        case "ㄴ": Inum_a = 2; break
        case "ᄃ":
        case "ᆮ":
        case "ㄷ": Inum_a = 3; break
        case "ᄄ":
        case "ㄸ": Inum_a = 4; break
        case "ᄅ":
        case "ᆯ":
        case "ㄹ": Inum_a = 5; break
        case "ᄆ":
        case "ᆷ":
        case "ㅁ": Inum_a = 6; break
        case "ᄇ":
        case "ᆸ":
        case "ㅂ": Inum_a = 7; break
        case "ᄈ":
        case "ㅃ": Inum_a = 8; break
        case "ᄉ":
        case "ᆺ":
        case "ㅅ": Inum_a = 9; break
        case "ᄊ":
        case "ᆻ":
        case "ㅆ": Inum_a = 10; break
        case "ᄋ":
        case "ᆼ":
        case "ㅇ": Inum_a = 11; break
        case "ᄌ":
        case "ᆽ":
        case "ㅈ": Inum_a = 12; break
        case "ᄍ":
        case "ㅉ": Inum_a = 13; break
        case "ᄎ":
        case "ᆾ":
        case "ㅊ": Inum_a = 14; break
        case "ᄏ":
        case "ᆿ":
        case "ㅋ": Inum_a = 15; break
        case "ᄐ":
        case "ᇀ":
        case "ㅌ": Inum_a = 16; break
        case "ᄑ":
        case "ᇁ":
        case "ㅍ": Inum_a = 17; break
        case "ᄒ":
        case "ᇂ":
        case "ㅎ": Inum_a = 18; break
    }
    if(Inum_a>=0) return true
    else     return false
}

function response(room, msg, sender, isGroupChat, replier, imageDB) {
	msg = msg.replace(/[ ]/g,'');
	var date = new Date();

	if(PreMsg[room] == null) {
		PreMsg[room] = new Array();
		MsgNum[room] = 0;
	}

	PreMsg[room][MsgNum[room]] = new Array();
	PreMsg[room][MsgNum[room]]["time"] = (date.getMonth()-1)+"월 "+date.getDate()+"일 "+date.getHours()+"시 "+date.getMinutes()+"분 "+date.getSeconds()+"초";
	PreMsg[room][MsgNum[room]]["text"] = msg;
	PreMsg[room][MsgNum[room]]["sender"] = sender;
	MsgNum[room]++;
    if(sender=="천연수") replier.reply(room, msg, sender, isGroupChat, replier)
    function SendSavedMessage(msg,room) { //저장한 메세지를 보내는 함수
        var num = 0;
        if(msg.length<2) return
		if(is자음(msg[0]) && msg[1].match(/[?1-9]/) && msg[msg.length-1].match(/[?0-9]/))
		{
            replier.reply("들어옴");
            while(msg.length>1) {
                if(msg[msg.length-1].match(/[?]/)) {
                    msg = msg.substr(0,msg.length-1)
                    num++
                }
            }
            if(num==0) {
                num = Number(msg.substr(1))
            }
            replier.reply(fullNum, num)
            if(num < 1||fullNum<num) return
			MsgNum[room]--;
			var SavedDate   = PreMsg[room][MsgNum[room]-num]["time"];
			var SavedMsg    = PreMsg[room][MsgNum[room]-num]["text"];
            var SavedSender = PreMsg[room][MsgNum[room]-num]["sender"];
            replier.reply(SavedDate,SavedMsg,SavedSender)
			if(SavedSender=="손"||SavedSender=="물거북")
				return replier.reply("저는 제작자를 배반할 수 없습니다");
			else
				return replier.reply(SavedSender+" : "+SavedMsg+"\n& "+SavedDate);
		}
	}
	SendSavedMessage(msg,room);
}