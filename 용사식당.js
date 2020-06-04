function response(room, msg, sender, isGroupChat, replier, imageDB)
{
        var detail = "\u200b".repeat(500)
        if(room != "용사식당") return // 용사식당 채팅방에서만 사용

        { // 리타의 일지
        lita = function(stageNum,fightingPow,answer) { //str이 메세지에 포함됫다면 반환
                var num
                if(msg.match(/^.?리타[의]?.?[일지]?.?[1-9][0-9]장$/)) { // 리타 10~99장
                        var num = msg.substr(msg.indexOf("장")-2,2)
                }
                else if(msg.match(/^.?리타[의]?.?[일지]?.?[1-9]장$/)) { // 리타 1~9장
                        var num = msg.substr(msg.indexOf("장")-1,1)

                }
                if(stageNum == num)
                        replier.reply("리타의 일지 "+ stageNum +"장 ("+ fightingPow +")" + (answer.match("없슴둥") ? "" : detail) + "\n" + answer)
        }
        lita("1","14.38a",            
                "추가예정 없슴둥")
    
        lita("2","16.15a",                                                          
                "추가예정 없슴둥")
        
        lita("3","20.30a",                                                         
                "추가예정 없슴둥")

        lita("4","25.37a",                                                       
                "추가예정 없슴둥")

        lita("5","31.55a",                                                          
                "추가예정 없슴둥")        

        lita("6","39,05a",
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [21.91a]\n"+
                "https://gall.dcinside.com/m/youngsa/12604\n"+
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [21.04a]\n"+
                "https://gall.dcinside.com/m/youngsa/14444\n"+
                "- 코코뱅 / 퐁듀 / 리무 / 타바스코 [21.17a]\n"+
                "https://gall.dcinside.com/m/youngsa/15248\n"+
                "- 코코뱅 / 퐁듀 / 머핀 / 타바스코 [23.63a]\n"+
                "https://gall.dcinside.com/m/youngsa/22557")


        lita("7","48.13a",
                "- 리무 / 에스프레소 / 에끌레르 / 타바스코 [29.42a]\n"+       
                "https://gall.dcinside.com/m/youngsa/7722\n")

        lita("8","59.09a",                                                          
                "- 아이란 / 리무 / 레이션 / 타바스코 [28.2a]\n"+            
                "https://gall.dcinside.com/m/youngsa/7987\n")

        lita("9","79.28a",                                                          
                "- 아이란 / 리무 / 머핀 / 타바스코 [ ? (대충50a 추정) ]\n"+           
                "https://gall.dcinside.com/m/youngsa/5727\n"+            
                "- 아이란 / 코코뱅 / 에스프레소 / 타바스코 [42.65a]\n"+           
                "https://gall.dcinside.com/m/youngsa/9913\n")

        lita("10","88.12a",                                                     
                "- 코코뱅 / 퐁듀 / 모카 / 타바스코 [50.68a]\n"+            
                "https://gall.dcinside.com/m/youngsa/6163\n"+
                "- 리무 / 모카 / 머핀 / 타바스코 [44.84a]\n"+
                "https://gall.dcinside.com/m/youngsa/18856")


        lita("11","107.09a",                                                         
                "- 코코뱅 / 퐁듀 / 머핀 / 타바스코 [63.32a]\n"+            
                "https://gall.dcinside.com/m/youngsa/6653\n"+            
                "- 코코뱅 / 퐁듀 / 리무 / 타바스코 [59.11a]\n"+            
                "https://gall.dcinside.com/m/youngsa/12123\n"+
                "- 코코뱅 / 리무 / 머핀 / 타바스코 [56.18a]\n"+
                "https://gall.dcinside.com/m/youngsa/19665")



        lita("12","129.75a",                                                        
                "- 아이란 / 리무 / 모카 / 타바스코 [81.05a]\n"+            
                "https://gall.dcinside.com/m/youngsa/8167\n"+            
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [70.58a]\n"+           
                "https://gall.dcinside.com/m/youngsa/13088\n"+
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [69.04a]\n"+
                "https://gall.dcinside.com/m/youngsa/20470")


        lita("13","156.76a",                                                      
                "- 아이란 / 리무 / 에끌레르 / 타바스코 [약 95a]\n"+            
                "https://gall.dcinside.com/m/youngsa/6685\n"+            
                "- 퐁듀 / 리무 / 에끌레르 / 타바스코 [80.01a]\n"+            
                "https://gall.dcinside.com/m/youngsa/13559\n"+
                "- 아이란 / 리무 / 에끌레르 / 타바스코 [73.59a]\n"+
                "https://gall.dcinside.com/m/youngsa/20708")


        lita("14","188.90a",                                                          
                "- 리무 / 에스프레소 / 레이션 / 타바스코 [117.45a]\n"+            
                "https://gall.dcinside.com/m/youngsa/7872\n"+            
                "- 코코뱅 / 리무 / 에스프레소 / 타바스코 [96.22a]\n"+            
                "https://gall.dcinside.com/m/youngsa/14109\n"+
                "- 리무 / 에스프레소 / 레이션 / 타바스코 [95.60a]\n"+
                "https://gall.dcinside.com/m/youngsa/21711")


        lita("15","227.07a",                                                                     
                "- 리무 / 머핀 / 레이션 / 타바스코 [132.44a]\n"+            
                "https://gall.dcinside.com/m/youngsa/7671\n"+
                "- 리무 / 머핀 / 레이션 / 타바스코 [109.69a]\n"+
                "https://gall.dcinside.com/m/youngsa/22080\n"+
                "- 리무 / 머핀 / 레이션 / 타바스코 [약 123a]\n"+
                "https://gall.dcinside.com/m/youngsa/24984")


        lita("16","272.31a",                                                
                "- 퐁듀 / 리무 / 머핀 / 타바스코 [130.90a]\n"+
                "https://gall.dcinside.com/m/youngsa/23218")

        lita("17","325.84a",                                                
                "- 리무 / 모카 / 레이션 / 타바스코 [139.13a]\n"+
                "https://gall.dcinside.com/m/youngsa/23573")

        lita("18","389.08a",                                                           
                "- 코코뱅 / 퐁듀 / 머핀 / 타바스코 [262.87a]\n"+            
                "https://gall.dcinside.com/m/youngsa/11072\n"+
                "- 아이란 / 코코뱅/ 퐁듀 / 레이션 [182.57a]\n"+
                "https://gall.dcinside.com/m/youngsa/24657")

        lita("19","463.67a",                                                          
                "- 리무 / 에끌레르 / 레이션 / 타바스코 [283.51a]\n"+            
                "https://gall.dcinside.com/m/youngsa/11425\n"+            
                "- 코코뱅 / 리무 / 에끌레르 / 타바스코 [290.69a]\n"+           
                "https://gall.dcinside.com/m/youngsa/13930\n"+            
                "- 리무 / 에끌레르 / 레이션 / 타바스코 [276.61a]\n"+            
                "https://gall.dcinside.com/m/youngsa/15331\n")

        lita("20","551.51a",                                                                      
                "- 아이란 / 리무 / 레이션 / 타바스코 [320.14a]\n"+            
                "https://gall.dcinside.com/m/youngsa/12307\n"+            
                "- 아이란 / 코코뱅 / 리무 / 타바스코 [315.44a]\n"+            
                "https://gall.dcinside.com/m/youngsa/14201\n"+
                "- 아이란 / 리무 / 레이션 / 타바스코 [325.59a]\n"+
                "https://gall.dcinside.com/m/youngsa/15855")


        lita("21","654.82a",                                                                    
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [340.12a]\n"+           
                "https://gall.dcinside.com/m/youngsa/12659\n"+
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [355.65a]\n"+
                "https://gall.dcinside.com/m/youngsa/16754")

        lita("22","776.15a",                                                                 
                "- 퐁듀 / 리무 / 머핀 / 타바스코 [460.75a]\n"+            
                "https://gall.dcinside.com/m/youngsa/14126\n"+                        
                "- 퐁듀 / 리무 / 머핀 / 타바스코 [431.21a]\n"+            
                "https://gall.dcinside.com/m/youngsa/15595\n")

        lita("23","918.47a",                                                      
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [495.47a]\n"+           
                "https://gall.dcinside.com/m/youngsa/14681\n"+
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [513.70a]\n"+
                "https://gall.dcinside.com/m/youngsa/18230")

        lita("24","1.08b",                                                                        
                "- 코코뱅 / 리무 / 머핀 / 타바스코 [약 615a(추정)]\n"+            
                "https://gall.dcinside.com/m/youngsa/14998\n"+
                "- 코코뱅 / 리무 / 머핀 / 타바스코 [649.67a]\n"+
                "https://gall.dcinside.com/m/youngsa/19370\n"+
                "- 코코뱅 / 리무 / 모카 / 타바스코 [571.01a]\n"+
                "https://gall.dcinside.com/m/youngsa/20767"
        )

        lita("25","1.28b",        
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [662.66a]\n"+
                "https://gall.dcinside.com/m/youngsa/17808\n"+
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [711.81a]\n"+
                "https://gall.dcinside.com/m/youngsa/19744\n"+
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [593.52a]\n"+
                "https://gall.dcinside.com/m/youngsa/20761")

        lita("26","1.50b",        
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [721.49a]\n"+
                "https://gall.dcinside.com/m/youngsa/19786\n"+
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [606.35a]\n"+
                "https://gall.dcinside.com/m/youngsa/21096")

        lita("27","1.77b",        
                "- 코코뱅 / 퐁듀 / 머핀 / 타바스코 [985.68a]\n"+
                "https://gall.dcinside.com/m/youngsa/19829\n"+
                "- 코코뱅 / 퐁듀 / 머핀 / 타바스코 [978.05a]\n"+
                "https://gall.dcinside.com/m/youngsa/21719")

        lita("28","2.08b",        
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [1.23b]\n"+
                "https://gall.dcinside.com/m/youngsa/19934\n"+
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [1.14b]\n"+
                "https://gall.dcinside.com/m/youngsa/21051\n"+
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [1.07b]\n"+
                "https://gall.dcinside.com/m/youngsa/22126\n"+
                "- 아이란 / 퐁듀 / 레이션 / 타바스코 [951.24a]\n"+
                "https://gall.dcinside.com/m/youngsa/23614")

        lita("29","2.44b",        
                "- 리무 / 모카 / 레이션 / 타바스코 [1.28b]\n"+
                "https://gall.dcinside.com/m/youngsa/20306\n"+
                "- 리무 / 모카 / 레이션 / 타바스코 [1.28b]\n"+
                "https://gall.dcinside.com/m/youngsa/23518")

        lita("30","2.86b",        
                "- 아이란 / 퐁듀 / 레이션 / 타바스코 [1.54b]\n"+
                "https://gall.dcinside.com/m/youngsa/22649\n"+
                "- 아이란 / 리무 / 레이션 / 타바스코 [1.52b]\n"+
                "https://gall.dcinside.com/m/youngsa/24633")


        lita("31","3.35b",        
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [1.87b]\n"+
                "https://gall.dcinside.com/m/youngsa/21763\n"+
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [2.09b]\n"+
                "https://gall.dcinside.com/m/youngsa/23226\n"+
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [1.86b]\n"+
                "https://gall.dcinside.com/m/youngsa/25929")

        lita("32","3.92b",        
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [2.09b]\n"+
                "https://gall.dcinside.com/m/youngsa/23227\n"+
                "- 퐁듀 / 리무 / 레이션 / 타바스코 [1.91b]\n"+
                "https://gall.dcinside.com/m/youngsa/26026")

        lita("33","4.58b",        
                "- 아이란 / 리무 / 레이션 / 타바스코 [2.35b]\n"+
                "https://gall.dcinside.com/m/youngsa/24142\n"+
                "- 아이란 / 리무 / 레이션 / 타바스코 [2.44b]\n"+
                "https://gall.dcinside.com/m/youngsa/24148\n"+
                "- 아이란 / 리무 / 레이션 / 타바스코 [1.93b]\n"+
                "https://gall.dcinside.com/m/youngsa/26063")
        lita("34","5.35b",        
                "없슴둥")
        lita("35","6.23b",        
                "- 코코뱅 / 리무 / 머핀 / 타바스코 [3.40b]\n"+
                "https://gall.dcinside.com/m/youngsa/30295\n"+
                "- 코코뱅 / 머핀 / 레이션 / 타바스코 [2.94b]\n"+
                "https://gall.dcinside.com/m/youngsa/30506\n")
        lita("36","7.26b",        
                "- 아이란 / 퐁듀 / 레이션 / 타바스코 [3.62b]\n"+
                "https://gall.dcinside.com/m/youngsa/30497\n"+
                "- 아이란 / 퐁듀 / 레이션 / 타바스코 [3.12b]\n"+
                "https://gall.dcinside.com/m/youngsa/24148\n")
        lita("37","8.45b",        
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [3.69b]\n"+
                "https://gall.dcinside.com/m/youngsa/30595\n"+
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [3.30b]\n"+
                "https://gall.dcinside.com/m/youngsa/30707\n")
        lita("38","9.83b",        
                "- 퐁듀 / 모카 / 레이션 / 타바스코 [3.92b]\n"+
                "https://gall.dcinside.com/m/youngsa/30724\n"+
                "- 리무 / 모카 / 레이션 / 타바스코 [3.72b]\n"+
                "https://gall.dcinside.com/m/youngsa/30831\n")
        lita("39","11.41b",        
                "- 리무 / 핫도그 / 레이션 / 타바스코 [5.26b]\n"+
                "https://gall.dcinside.com/m/youngsa/30873\n"+
                "- 리무 / 핫도그 / 레이션 / 타바스코 [5.51b]\n"+
                "https://gall.dcinside.com/m/youngsa/31464\n")
        lita("40","13.25b",        
                "- 리무 / 에끌레르 / 머핀 / 타바스코 [6.66b]\n"+
                "https://gall.dcinside.com/m/youngsa/31061\n"+
                "- 리무 / 에끌레르 / 레이션 / 타바스코 [6.43b]\n"+
                "https://gall.dcinside.com/m/youngsa/31786\n"+
                "- 리무 / 에끌레르 / 레이션 / 타바스코 [6.67b]\n"+
                "https://gall.dcinside.com/m/youngsa/31929")
        lita("41","15.36b",        
                "- 퐁듀 / 모카 / 레이션 / 타바스코 [6.31b]\n"+
                "https://gall.dcinside.com/m/youngsa/31786\n"+
                "- 퐁듀 / 모카 / 레이션 / 타바스코 [6.69b]\n"+
                "https://gall.dcinside.com/m/youngsa/31932\n")
        lita("42","17.80b",        
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [7.37b]\n"+
                "https://gall.dcinside.com/m/youngsa/31086\n"+
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [7.12b]\n"+
                "https://gall.dcinside.com/m/youngsa/31962\n"+
                "- 코코뱅 / 퐁듀 / 레이션 / 타바스코 [6.66b]\n"+
                "https://gall.dcinside.com/m/youngsa/32216")
        lita("43","20.62b",        
                "- 아이란 / 코코뱅 / 퐁듀 / 타바스코 [7.77b]\n"+
                "https://gall.dcinside.com/m/youngsa/32354\n")
        lita("44","23.86b",        
                "- 아이란 / 코코뱅 / 리무 / 타바스코 [12.19b]\n"+
                "https://gall.dcinside.com/m/youngsa/32313\n"+
                "- 아이란 / 리무 / 레이션 / 타바스코 [11.98b]\n"+
                "https://gall.dcinside.com/m/youngsa/32858\n"+
                "- 아이란 / 리무 / 에스프레소 / 타바스코 [12.05b]\n"+
                "https://gall.dcinside.com/m/youngsa/33106")
        lita("45","27.58b",        
                "- 퐁듀 / 핫도그 / 레이션 / 타바스코 [13.09b]\n"+
                "https://gall.dcinside.com/m/youngsa/32434\n"+
                "- 퐁듀 / 핫도그 / 레이션 / 타바스코 [13.08b]\n"+
                "https://gall.dcinside.com/m/youngsa/32999 \n"+
                "- 코코뱅 / 핫도그 / 레이션 / 타바스코[12.80b]\n"+
                "https://gall.dcinside.com/m/youngsa/33224")
        lita("46","31.87b",        
                "- 아이란 / 퐁듀 / 리무 / 타바스코 [15.37b]\n"+
                "https://gall.dcinside.com/m/youngsa/33139\n")
        lita("47","36.80b",        
                "- 아이란 / 리무 / 레이션 / 타바스코 [15.50b]\n"+
                "https://gall.dcinside.com/m/youngsa/33273\n")
        lita("48","42.47b",        
                "- 아이란 / 리무 / 레이션 / 타바스코 [15.50b]\n"+
                "https://gall.dcinside.com/m/youngsa/33275\n")
        lita("49","48.97b",        
                "- 코코뱅 / 에스프레소 / 레이션 / 타바스코 [22.87b]\n"+
                "https://gall.dcinside.com/m/youngsa/33885\n")
        lita("50","56.44b",        
                "- 퐁듀 / 모카 / 레이션 / 타바스코 [23.21b]\n"+
                "https://gall.dcinside.com/m/youngsa/33972\n")
        lita("51","65.01b",        
                "- 퐁듀 / 리무 / 머핀 / 타바스코 [31.92b]\n"+
                "https://gall.dcinside.com/m/youngsa/34428\n")
        lita("52","74.84b",        
                "- 리무 / 에끌레르 / 레이션 / 타바스코 [34.48b]\n"+
                "https://gall.dcinside.com/m/youngsa/34530\n")
        lita("53","86.11b",        
                "없슴둥")
        lita("54","99.01b",        
                "없슴둥")
        lita("55","113.79b",        
                "없슴둥")
        lita("56","--",        
                "없슴둥")
        lita("57","--",        
                "없슴둥")
        lita("58","--",        
                "없슴둥")
        lita("59","--",        
                "없슴둥")
        lita("60","--",        
                "없슴둥")
        lita("61","--",        
                "없슴둥")
        lita("62","--",        
                "없슴둥")
        }
        { // 깐프탑
        elf = function(stageNum,map) {
                var num
                if(msg.match(/^.?[깐|엘]프.?[고대]?.?[도시]?.?[1-9][0-9]구역$/)) { // 깐프 10~99구역
                        var num = msg.substr(msg.indexOf("구역")-2,2)
                }
                else if(msg.match(/^.?[깐|엘]프.?[고대]?.?[도시]?.?[1-9]구역$/)) { // 깐프 1~9구역
                        var num = msg.substr(msg.indexOf("구역")-1,1)

                }
                if(stageNum == num)
                        replier.reply("엘프 고대 도시 "+ stageNum + "구역 지도" + "\n" + map)
        }
        elf("1",
        "●→●→●→◆")
        elf("2",
        "　　　　　　●→⊙\n"+
        "　　　　　　↑\n"+
        "　　●←●　●←⊙→●\n"+
        "　　↓　↑　　　↑　↓\n"+　
        "●←●　⊙→●→⊙　⊙\n"+
        "↓　　　↑　　　↓\n"+
        "⊙　　　●←●　⊙\n"+
        "↓　　　　　↑\n"+
        "◆　　　●→⊙")
        elf("3",
        "⊙←●　⊙\n"+
        "　　↑　↑\n"+
        "●←⊙　●　⊙←●\n"+
        "↓　↑　↑　　　↑\n"+
        "⊙　●　●　●→⊙\n"+
        "↓　　　↑　↑　↓\n"+
        "⊙→●→⊙→●　●→◆")
        elf("4",
        "　　　　●→●→⊙\n"+
        "　　　　↑\n"+
        "●→●→⊙→●→●\n"+
        "　　　　　　　　↓\n"+
        "　　　　⊙←●　⊙\n"+
        "　　　　↓　↑　↓\n"+
        "　　　　◆　⊙←●\n"+
        "　　　　　　↓\n"+
        "⊙←●←●←⊙→●→⊙")
        elf("5",
        "　　●→●　●→⊙\n"+
        "　　↑　↓　↑\n"+
        "◆←⊙　⊙　⊙←●\n"+
        "　　↑　　　↓　↑\n"+
        "　　●　●←●　●\n"+
        "　　↑　↓\n"+
        "　　⊙　⊙→●\n"+
        "　　↑　↓　↓\n"+
        "　　⊙←●　⊙")
        elf("6",
        "　　　　　　　　⊙←●\n"+
        "　　　　　　　　　　↑\n"+
        "⊙←●←⊙←●←⊙→●\n"+
        "↓　　　　　　　↑\n"+
        "●　　　　　　　⊙→●\n"+
        "↓　　　　　　　↑　↓\n"+
        "●→◆　　　●→●　⊙\n"+
        "↓\n"+
        "●→●→⊙")
        elf("7",
        "　　★←⊙←⊙←●\n"+
        "　　　　　　　　↑\n"+
        "⊙←●←●　⊙→●\n"+
        "　　　　↑　↑\n"+
        "⊙←●←⊙→●\n"+
        "　　　　↑\n"+
        "　　　　●　●\n"+
        "　　　　↑　↓\n"+
        "⊙←●←⊙←●")
        elf("8",
        "●→⊙→⊙\n"+
        "　　　　↓\n"+
        "　　　　●　⊙←●\n"+
        "　　　　↓　　　↑\n"+
        "　　　　●→●→⊙　⊙\n"+
        "　　　　　　　　↓　↑\n"+
        "　　　　◆←●←⊙→⊙\n"+
        "　　　　　　　　　　↓\n"+
        "　　　　　　⊙←●←●")
        elf("9",
        "●　　　　　⊙　　　⊙\n"+
        "↓　　　　　↑　　　↑\n"+
        "⊙→⊙→●　●　◆　●\n"+
        "　　　　↓　↑　↑　↑\n"+
        "●←●←⊙　●←⊙→●\n"+
        "↓　　　↓　　　↑\n"+
        "⊙　　　●→⊙→●")
        elf("10",
        "　　⊙←●←⊙→●\n"+
        "　　　　　　↑　↓\n"+
        "◆←●←●←⊙　⊙\n"+
        "　　　　　　↑\n"+
        "　　　　●→●\n"+
        "　　　　↑\n"+
        "●　●→⊙→●→●→⊙\n"+
        "↓　↑\n"+
        "⊙→⊙")
        elf("11",
        "　　　　⊙←●←●\n"+
        "　　　　　　　　↑\n"+
        "　　●←●　●←⊙←●\n"+
        "　　↓　↑　↓\n"+
        "⊙　⊙　⊙←●\n"+
        "↑　　　↓\n"+
        "●←●←⊙　⊙→⊙→●\n"+
        "　　　　↑　↓　　　↓\n"+
        "　　　　●→●　　　◆")
        elf("12",
        "●　●→⊙　⊙←●\n"+
        "↓　↑　　　　　↑\n"+
        "⊙→⊙　●←⊙→●\n"+
        "↓　↓　↓　↑\n"+
        "●　●　◆　●\n"+
        "↓　↓　　　↑\n"+
        "⊙　⊙→⊙→●")
        elf("13",
        "없슴둥")
        elf("14",
        "미개방")
        elf("15",
        "미개방")
        elf("16",
        "미개방")
        elf("17",
        "미개방")
        }
                
}