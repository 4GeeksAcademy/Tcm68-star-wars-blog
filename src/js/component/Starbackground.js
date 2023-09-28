import React, { Component } from "react";
import "/workspaces/Tcm68-star-wars-blog/src/styles/Star.css";

class FireflyBackground extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.c = null;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.f = [];
  }

  componentDidMount() {
    this.initCanvas();
    this.loop();
    setInterval(this.loop, 500 / 60);
  }

  initCanvas() {
    this.c = this.canvasRef.current.getContext("2d");
    this.canvasRef.current.width = this.w;
    this.canvasRef.current.height = this.h;
    this.c.fillStyle = "rgba(30,30,30,1)";
    this.c.fillRect(0, 0, this.w, this.h);
  }

  draw() {
    if (this.f.length < 200) {
      for (let j = 0; j < 5; j++) {
        this.f.push(this.createFirefly());
      }
    }

    // Animation
    for (let i = 0; i < this.f.length; i++) {
      this.moveFirefly(this.f[i]);
      this.showFirefly(this.f[i]);
      if (
        this.f[i].x < 0 ||
        this.f[i].x > this.w ||
        this.f[i].y < 0 ||
        this.f[i].y > this.h
      ) {
        this.f.splice(i, 1);
      }
    }
  }

  createFirefly() {
    return {
      x: Math.random() * this.w,
      y: Math.random() * this.h,
      size: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.5,
      color: "#ffffff",
      ang: Math.random() * 2 * Math.PI,
      v: Math.random() * 0.08 + 0.02,
    };
  }

  moveFirefly(firefly) {
    firefly.x += firefly.v * Math.cos(firefly.ang);
    firefly.y += firefly.v * Math.sin(firefly.ang);
    firefly.ang += Math.random() * 20 * (Math.PI / 180) - 10 * (Math.PI / 180);
  }

  showFirefly(firefly) {
    this.c.fillStyle = firefly.color;
    this.c.globalAlpha = firefly.opacity;
    this.c.fillRect(firefly.x, firefly.y, firefly.size, firefly.size);
  }

  loop = () => {
    window.requestAnimationFrame(this.loop);
    this.c.clearRect(0, 0, this.w, this.h);
    this.draw();
  };

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default FireflyBackground;
