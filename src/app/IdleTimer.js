class IdleTimer {
    constructor({ timeout, onTimeout }) {
      this.timeout = timeout;
      this.onTimeout = onTimeout;
  
      this.eventHandler = this.updateExpiredTime.bind(this);
      this.tracker();
      this.startInterval();
    }
  
    startInterval() {
      this.updateExpiredTime();
  
      this.interval = setInterval(() => {
        const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
        if (expiredTime < Date.now()) {
          if (this.onTimeout) {
            this.onTimeout();
            this.cleanUp();
          }
        }
            if((expiredTime - 119 * 1000)  > Date.now().valueOf() && (expiredTime - 120 * 1000)  < Date.now().valueOf()) {
                alert("Por seguridad le quedan 2 minutos en sesión si continua en inactividad.");
            }  
        
      }, 1000);
    }
  
    updateExpiredTime() {
      if (this.timeoutTracker) {
        clearTimeout(this.timeoutTracker);
      }
      this.timeoutTracker = setTimeout(() => {
        localStorage.setItem("_expiredTime", Date.now() + this.timeout * 1000);
      }, 300);
    }
  
    tracker() {
      window.addEventListener("mousemove", this.eventHandler);
      window.addEventListener("scroll", this.eventHandler);
      window.addEventListener("keydown", this.eventHandler);
    }
  
    cleanUp() {
      clearInterval(this.interval);
      window.removeEventListener("mousemove", this.eventHandler);
      window.removeEventListener("scroll", this.eventHandler);
      window.removeEventListener("keydown", this.eventHandler);
    }
  }
  export default IdleTimer;