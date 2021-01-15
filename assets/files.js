class Files {
  constructor(path) {
    this.path = path;
  }

  read(cb){
    var script = document.createElement('script');
    script.onload = function () {
        cb(habitacion);
    };
    script.src = this.path;
    document.head.appendChild(script);
  }

};
