

function response(room, msg, sender, isGroupChat, replier, imageDB) {
    talkBack = function(talk,answer) {
        if(msg==talk) {
            replier.reply(answer)
        }
    }
    msg = msg.trim()
    if(room!="가브리엘 드롭아웃") return 
    if(msg=="/이용법") {
    " <가브릴 봇 이용법>\n"+
    "1:1대화는 가브릴에게 말을 가르치거나, 봇 관련 문의를 하는 곳입니다. 물론 DB 입력은 수동입니다. 즉시 답이 오지 않더라도 당황하지 마세요.\n"+
    "DB 저장에는 평균 30초정도 소요됩니다.\n\n"+

    "*가브릴에게 말을 가르치는 법\n"+
    "수신: 예) 학교가기 싫어 가브릴\n"+
    "응답: 예) 가브릴이 대신 가줄까?\n\n"+

    "주의사항\n"+
    "-너무 자주 사용되는 단어는 안됩니다.\n"+
    "-기본 설정 단어는 안됩니다.\n"+
    "가브야 안녕. 가브릴 사랑해. 가브릴 미워 등\n"+
    "-욕설/지나치게 선정적인 말 안됩니다.\n"+
    "-질문과 답변이 전혀 연관없는 경우도 불가능합니다.\n"+
    "-개인의 개별 닉네임 삽입은 불가능하고, [보낸사람] 으로 적어주시면 설정 가능합니다.\n"+
    "-예외로 봇 주인의 마음에 너무 안드는 경우..거절될 수 있습니다\n"
    }
    if(msg=="퍽퍽퍽퍽 가브야 사랑해"&&sender=="가브갤 빌런")
        replier.reply("가브갤 빌런님 없이는 살 수 없는 몸이 되버렷..❤")
    talkBack("가브 집안에 산다!","가브릴 책임지실거죠?❤")
    talkBack("가브야 그거하자 그거!","가브릴 씻고올게요❤")
    if(msg=="가브야") {
        var  num = Math.ceil(Math.random()*100)
        if     (num<=40) return replier.reply("네 주인님~");
        else if(num<=60) return replier.reply("ㅎㅎㅎㅎㅎㅎㅎ");
        else if(num<=80) return replier.reply("ㅗ");
        else if(num<=90) return replier.reply("그만불러 이 악마야");
        else if(num<=98) return replier.reply("말걸지마");
        else             return replier.reply("조용히하고 내 발이나 핥아");
    }
    if(msg.indexOf("ㅗ")!=-1) {
        var  num = Math.ceil(Math.random()*5)
        var result = ''
        for(var i=0;i<num;i++) {
            result = result.concat("ㅗ")
        }
        replier.reply(result)
    }
    if(msg.indexOf("얼마")==0) {
        var  num = Math.ceil(Math.random()*20)
        if     (num<=15) return replier.reply("3천엔~");
        else             return replier.reply("5만엔이다 ㅗㅗㅗ");
    }
    if(msg=="타노시") {
            return replier.reply("타노시");
    }
    if(msg.replace(' ','')=="ㅁㅁㄱㄹㅌㅇㅇㄷ") {
        return replier.reply("머뭇거릴 틈이없다!");
    }
    if(msg.replace(' ','')=="머뭇거릴틈이없다") {
        return replier.reply("ㅁㅁㄱㄹㅌㅇㅇㄷ");
    }
    if(msg=="주사위게임") {
        var  num = Math.ceil(Math.random()*100)
        return replier.reply("주사위를 굴려 "+num+"이 나왔습니다!")
    }
    if(msg.indexOf("!히토미검색")!=-1) {
        msg = msg.replace("!히토미검색",'')
        var num = msg.trim()
        return replier.reply("https://hitomi.la/galleries/"+num+".html")
    }
    if(msg=="나 좋아하지마") {
        return replier.reply("그게 뭔데");
    }
    if(msg=="나 좋아하지 말라고") {
        return replier.reply("그거 어떻게 하는건데");
    }
}