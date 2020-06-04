/*   java.util.Timer 
void schedule(TimerTask task, Date time)
지정한 시간(time)에 지정한 작업(task)을 수행한다.  
void schedule(TimerTask task, Date firstTime, long period)
지정한 시간(firstTime) 부터 일정 간격(period)으로 지정한 작업(task)을 수행한다.  
void schedule(TimerTask task, long delay)
일정 시간(delay)이 지난 후에 지정한 작업(task)을 수행한다.  
void schedule(TimerTask task, long delay, long period)
일정 시간(delay)이 지난 후에 일정 간격(period)으로 지정한 작업(task)을 수행한다. 

void scheduleAtFixedRate(TimerTask task, Date firstTime, long period)
지정한 시간(firstTime)부터 일정 간격(period)으로 지정한 작업(task)을 수행한다.  
void scheduleAtFixedRate(TimerTask task, long delay, long period)
일정한 시간(delay)이 지난후에 일정 간격(period)으로 지정한 작업(task)을 수행한다.

[출처] java.util.Timer 클래스와 java.util.TimerTask 클래스|작성자 오렌지
 */


var isChecked = new Array();
var isworking = false;

var timer = new java.util.Timer();
let timer_task = new java.util.TimerTask(
    new java.lang.Runnable(
        {
            run:function() {
                /* 날짜 처리 */
                var today = new Date()
                var year  = today.getFullYear() 
                var month = today.getMonth()
                var date  = today.getDate()
                var day   = today.getDay() //0:일 1:월 2:화 3:수 4:목
                var hours = today.getHours()
                var minutes = today.getMinutes()
                if(hours<10) hours = '0'.concat(hours)
                if(minutes<10) minutes = '0'.concat(minutes)
                var checkTime = String(year) + String(month) + String(date) + String(hours)
                var nowTime = String(hours) + String(minutes)

                // Kr: 한섭 Ch: 중섭 Ja: 일섭
                var KrBStartTime = Array("1100","1700","2200") //한섭 전지 시작
                var KrBEndTime = Array("1355","1955","0055")    //한섭 전지 종료5분전
                var KrAutoTime = Array("2350")                 //한섭 모의작전 종료10분전

                if(isworking == false) return;
                if(isChecked[checkTime]!=null) return; //만약 이미 메세지를 보냇다면 return
                

                if(KrBStartTime.indexOf(nowTime) != -1) {
                    Api.replyRoom('소녀전선 띠딩띠딩',"전지수급개시")                    
                    isChecked[checkTime] = true;
                }
                else if(KrBEndTime.indexOf(nowTime) != -1) {
                    Api.replyRoom('소녀전선 띠딩띠딩',"전지수급종료 5분전")
                    isChecked[checkTime] = true;
                }
                else if(KrAutoTime.indexOf(nowTime) != -1) {
                    Api.replyRoom('소녀전선 띠딩띠딩',"모의작전종료 10분전")
                    isChecked[checkTime] = true;
                }
            }
        }
    )
);

function response(room, msg, sender, isGroupChat, replier, imageDB) {
    msg = msg.trim()
    isManager = function() {
        var profiles = java.lang.String(imageDB.getProfileImage()).hashCode();
        if(profiles==-1278142564||profiles==683759106||profiles==1046162445) return true
        else return false
    }
    if(isManager()&&msg=='시작') {
        isworking = true;
        timer.scheduleAtFixedRate(timer_task, 1000, 5000)
        replier.reply("시작")
        return;
    }
    if(isManager()&&msg=='종료') {
        isworking = false;
        timer.cancel();
        replier.reply("종료")
        return;
    }
}
