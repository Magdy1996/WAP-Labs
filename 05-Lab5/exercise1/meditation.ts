/*
    Coding Exercise 01
    Implement the code for Meditation class to be used as follows:
    const morning_meditation = new Meditation(5);
    morning_meditation.start();
    console.log(`Start meditation`);
    // Start meditation
    // 5
    // 4
    // 3
    // 2
    // 1
    // Jay Guru Dev

*/

class Meditation {
    minutes : number;
    constructor(minutes : number) {
      this.minutes = minutes ;
    }
  
    start() {
<<<<<<< HEAD
      
=======
     
>>>>>>> 635ce8ff5a54a95840fc3daeb00a2e1a44696831
      const interval = setInterval(() => {
        if (this.minutes > 0) {
          console.log(this.minutes);
          this.minutes--;
        } else {
          console.log('Jay Guru Dev');
          clearInterval(interval);
        }
      }, 60 * 1000); // to represent One Minute
    }
  }
  

  const morning_meditation = new Meditation(5);
  morning_meditation.start();
<<<<<<< HEAD
  console.log('Start meditation');
  
=======
 console.log('Start meditation');
  
>>>>>>> 635ce8ff5a54a95840fc3daeb00a2e1a44696831
