(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
//2nd part start
    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days1").innerText = Math.floor(distance / (day)),
                document.getElementById("hours1").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes1").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds1").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());

        //3rd part start
        (function () {
            const second = 1000,
                  minute = second * 60,
                  hour = minute * 60,
                  day = hour * 24;
          
            //I'm adding this section so I don't have to keep updating this pen every year :-)
            //remove this if you don't need it
            let today = new Date(),
                dd = String(today.getDate()).padStart(2, "0"),
                mm = String(today.getMonth() + 1).padStart(2, "0"),
                yyyy = today.getFullYear(),
                nextYear = yyyy + 1,
                dayMonth = "09/30/",
                birthday = dayMonth + yyyy;
            
            today = mm + "/" + dd + "/" + yyyy;
            if (today > birthday) {
              birthday = dayMonth + nextYear;
            }
            //end
            
            const countDown = new Date(birthday).getTime(),
                x = setInterval(function() {    
          
                  const now = new Date().getTime(),
                        distance = countDown - now;
          
                  document.getElementById("days2").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours2").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes2").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second);
          
                  //do something later when date is reached
                  if (distance < 0) {
                    document.getElementById("headline").innerText = "It's my birthday!";
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                  }
                  //seconds
                }, 0)
            }());
            //4rd part start
            (function () {
                const second = 1000,
                      minute = second * 60,
                      hour = minute * 60,
                      day = hour * 24;
              
                //I'm adding this section so I don't have to keep updating this pen every year :-)
                //remove this if you don't need it
                let today = new Date(),
                    dd = String(today.getDate()).padStart(2, "0"),
                    mm = String(today.getMonth() + 1).padStart(2, "0"),
                    yyyy = today.getFullYear(),
                    nextYear = yyyy + 1,
                    dayMonth = "09/30/",
                    birthday = dayMonth + yyyy;
                
                today = mm + "/" + dd + "/" + yyyy;
                if (today > birthday) {
                  birthday = dayMonth + nextYear;
                }
                //end
                
                const countDown = new Date(birthday).getTime(),
                    x = setInterval(function() {    
              
                      const now = new Date().getTime(),
                            distance = countDown - now;
              
                      document.getElementById("days3").innerText = Math.floor(distance / (day)),
                        document.getElementById("hours3").innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById("minutes3").innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById("seconds3").innerText = Math.floor((distance % (minute)) / second);
              
                      //do something later when date is reached
                      if (distance < 0) {
                        document.getElementById("headline").innerText = "It's my birthday!";
                        document.getElementById("countdown").style.display = "none";
                        document.getElementById("content").style.display = "block";
                        clearInterval(x);
                      }
                      //seconds
                    }, 0)
                }());
                //5th part
                (function () {
                    const second = 1000,
                          minute = second * 60,
                          hour = minute * 60,
                          day = hour * 24;
                  
                    //I'm adding this section so I don't have to keep updating this pen every year :-)
                    //remove this if you don't need it
                    let today = new Date(),
                        dd = String(today.getDate()).padStart(2, "0"),
                        mm = String(today.getMonth() + 1).padStart(2, "0"),
                        yyyy = today.getFullYear(),
                        nextYear = yyyy + 1,
                        dayMonth = "09/30/",
                        birthday = dayMonth + yyyy;
                    
                    today = mm + "/" + dd + "/" + yyyy;
                    if (today > birthday) {
                      birthday = dayMonth + nextYear;
                    }
                    //end
                    
                    const countDown = new Date(birthday).getTime(),
                        x = setInterval(function() {    
                  
                          const now = new Date().getTime(),
                                distance = countDown - now;
                  
                          document.getElementById("days4").innerText = Math.floor(distance / (day)),
                            document.getElementById("hours4").innerText = Math.floor((distance % (day)) / (hour)),
                            document.getElementById("minutes4").innerText = Math.floor((distance % (hour)) / (minute)),
                            document.getElementById("seconds4").innerText = Math.floor((distance % (minute)) / second);
                  
                          //do something later when date is reached
                          if (distance < 0) {
                            document.getElementById("headline").innerText = "It's my birthday!";
                            document.getElementById("countdown").style.display = "none";
                            document.getElementById("content").style.display = "block";
                            clearInterval(x);
                          }
                          //seconds
                        }, 0)
                    }());

                    //6th part start
                    (function () {
                        const second = 1000,
                              minute = second * 60,
                              hour = minute * 60,
                              day = hour * 24;
                      
                        //I'm adding this section so I don't have to keep updating this pen every year :-)
                        //remove this if you don't need it
                        let today = new Date(),
                            dd = String(today.getDate()).padStart(2, "0"),
                            mm = String(today.getMonth() + 1).padStart(2, "0"),
                            yyyy = today.getFullYear(),
                            nextYear = yyyy + 1,
                            dayMonth = "09/30/",
                            birthday = dayMonth + yyyy;
                        
                        today = mm + "/" + dd + "/" + yyyy;
                        if (today > birthday) {
                          birthday = dayMonth + nextYear;
                        }
                        //end
                        
                        const countDown = new Date(birthday).getTime(),
                            x = setInterval(function() {    
                      
                              const now = new Date().getTime(),
                                    distance = countDown - now;
                      
                              document.getElementById("days5").innerText = Math.floor(distance / (day)),
                                document.getElementById("hours5").innerText = Math.floor((distance % (day)) / (hour)),
                                document.getElementById("minutes5").innerText = Math.floor((distance % (hour)) / (minute)),
                                document.getElementById("seconds5").innerText = Math.floor((distance % (minute)) / second);
                      
                              //do something later when date is reached
                              if (distance < 0) {
                                document.getElementById("headline").innerText = "It's my birthday!";
                                document.getElementById("countdown").style.display = "none";
                                document.getElementById("content").style.display = "block";
                                clearInterval(x);
                              }
                              //seconds
                            }, 0)
                        }());
                        //7th part 
                        (function () {
                            const second = 1000,
                                  minute = second * 60,
                                  hour = minute * 60,
                                  day = hour * 24;
                          
                            //I'm adding this section so I don't have to keep updating this pen every year :-)
                            //remove this if you don't need it
                            let today = new Date(),
                                dd = String(today.getDate()).padStart(2, "0"),
                                mm = String(today.getMonth() + 1).padStart(2, "0"),
                                yyyy = today.getFullYear(),
                                nextYear = yyyy + 1,
                                dayMonth = "09/30/",
                                birthday = dayMonth + yyyy;
                            
                            today = mm + "/" + dd + "/" + yyyy;
                            if (today > birthday) {
                              birthday = dayMonth + nextYear;
                            }
                            //end
                            
                            const countDown = new Date(birthday).getTime(),
                                x = setInterval(function() {    
                          
                                  const now = new Date().getTime(),
                                        distance = countDown - now;
                          
                                  document.getElementById("days6").innerText = Math.floor(distance / (day)),
                                    document.getElementById("hours6").innerText = Math.floor((distance % (day)) / (hour)),
                                    document.getElementById("minutes6").innerText = Math.floor((distance % (hour)) / (minute)),
                                    document.getElementById("seconds6").innerText = Math.floor((distance % (minute)) / second);
                          
                                  //do something later when date is reached
                                  if (distance < 0) {
                                    document.getElementById("headline").innerText = "It's my birthday!";
                                    document.getElementById("countdown").style.display = "none";
                                    document.getElementById("content").style.display = "block";
                                    clearInterval(x);
                                  }
                                  //seconds
                                }, 0)
                            }());

                            //8th part
                            (function () {
                                const second = 1000,
                                      minute = second * 60,
                                      hour = minute * 60,
                                      day = hour * 24;
                              
                                //I'm adding this section so I don't have to keep updating this pen every year :-)
                                //remove this if you don't need it
                                let today = new Date(),
                                    dd = String(today.getDate()).padStart(2, "0"),
                                    mm = String(today.getMonth() + 1).padStart(2, "0"),
                                    yyyy = today.getFullYear(),
                                    nextYear = yyyy + 1,
                                    dayMonth = "09/30/",
                                    birthday = dayMonth + yyyy;
                                
                                today = mm + "/" + dd + "/" + yyyy;
                                if (today > birthday) {
                                  birthday = dayMonth + nextYear;
                                }
                                //end
                                
                                const countDown = new Date(birthday).getTime(),
                                    x = setInterval(function() {    
                              
                                      const now = new Date().getTime(),
                                            distance = countDown - now;
                              
                                      document.getElementById("days7").innerText = Math.floor(distance / (day)),
                                        document.getElementById("hours7").innerText = Math.floor((distance % (day)) / (hour)),
                                        document.getElementById("minutes7").innerText = Math.floor((distance % (hour)) / (minute)),
                                        document.getElementById("seconds7").innerText = Math.floor((distance % (minute)) / second);
                              
                                      //do something later when date is reached
                                      if (distance < 0) {
                                        document.getElementById("headline").innerText = "It's my birthday!";
                                        document.getElementById("countdown").style.display = "none";
                                        document.getElementById("content").style.display = "block";
                                        clearInterval(x);
                                      }
                                      //seconds
                                    }, 0)
                                }());

                                //9th part start
                                (function () {
                                    const second = 1000,
                                          minute = second * 60,
                                          hour = minute * 60,
                                          day = hour * 24;
                                  
                                    //I'm adding this section so I don't have to keep updating this pen every year :-)
                                    //remove this if you don't need it
                                    let today = new Date(),
                                        dd = String(today.getDate()).padStart(2, "0"),
                                        mm = String(today.getMonth() + 1).padStart(2, "0"),
                                        yyyy = today.getFullYear(),
                                        nextYear = yyyy + 1,
                                        dayMonth = "12/30/",
                                        birthday = dayMonth + yyyy;
                                    
                                    today = mm + "/" + dd + "/" + yyyy;
                                    if (today > birthday) {
                                      birthday = dayMonth + nextYear;
                                    }
                                    //end
                                    
                                    const countDown = new Date(birthday).getTime(),
                                        x = setInterval(function() {    
                                  
                                          const now = new Date().getTime(),
                                                distance = countDown - now;
                                  
                                          document.getElementById("days8").innerText = Math.floor(distance / (day)),
                                            document.getElementById("hours8").innerText = Math.floor((distance % (day)) / (hour)),
                                            document.getElementById("minutes8").innerText = Math.floor((distance % (hour)) / (minute)),
                                            document.getElementById("seconds8").innerText = Math.floor((distance % (minute)) / second);
                                  
                                          //do something later when date is reached
                                          if (distance < 0) {
                                            document.getElementById("headline").innerText = "It's my birthday!";
                                            document.getElementById("countdown").style.display = "none";
                                            document.getElementById("content").style.display = "block";
                                            clearInterval(x);
                                          }
                                          //seconds
                                        }, 0)
                                    }());