function response(room, msg, sender, isGroupChat, replier, imageDB) {
    var profiles = java.lang.String(imageDB.getProfileImage()).hashCode();
    isManager = function() {
        if(profiles==-1278142564||profiles==683759106||profiles==1046162445) return true
        else return false
    }
    msg = msg.trim()
    sptMsg = msg.split("@")
    if(isManager()) {
        if(sptMsg[0]=='보내기') {
            Api.replyRoom(sptMsg[1],sptMsg[2])
        }
    }
}