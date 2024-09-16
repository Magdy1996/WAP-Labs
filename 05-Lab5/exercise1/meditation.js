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
var Meditation = /** @class */ (function () {
    function Meditation(minutes) {
        this.minutes = minutes;
    }
    Meditation.prototype.start = function () {
        var _this = this;
        var interval = setInterval(function () {
            if (_this.minutes > 0) {
                console.log(_this.minutes);
                _this.minutes--;
            }
            else {
                console.log('Jay Guru Dev');
                clearInterval(interval);
            }
        }, 1000); // to represent One Minute
    };
    return Meditation;
}());
var morning_meditation = new Meditation(5);
morning_meditation.start();
console.log('Start meditation');
