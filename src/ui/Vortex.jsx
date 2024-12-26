import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import propTypes from "prop-types";
import { cn } from "../lib/utils";

export const Vortex = (props) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const noise3D = createNoise3D();
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 1000;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = 120; // Green hue
  const rangeHue = 0; // Keep it fixed to green
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#ffffff"; // Default white background
  let tick = 0;
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  const rand = (n) => n * Math.random();
  const randRange = (n) => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = center[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue;

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas, ctx) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    window.requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i, ctx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const [x, y, vx, vy, life, ttl, speed, radius, hue] = particleProps.slice(
      i,
      i + particlePropCount
    );
    const n = noise3D(x * xOff, y * yOff, tick * zOff) * Math.PI * 2;
    const newVx = lerp(vx, Math.cos(n), 0.5);
    const newVy = lerp(vy, Math.sin(n), 0.5);
    const x2 = x + newVx * speed;
    const y2 = y + newVy * speed;

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(120, 100%, 40%, ${fadeInOut(life, ttl)})`; // Green color

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();

    const newLife = life + 1;
    particleProps.set(
      [x2, y2, newVx, newVy, newLife, ttl, speed, radius, hue],
      i
    );

    if (newLife > ttl) initParticle(i);
  };

  const resize = (canvas, ctx) => {
    const container = containerRef.current;
    if (!container) return;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    center = [canvas.width / 2, canvas.height / 2];
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas, ctx);
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", props.containerClassName)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>
      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};

Vortex.propTypes = {
  particleCount: propTypes.number,
  rangeY: propTypes.number,
  baseSpeed: propTypes.number,
  backgroundColor: propTypes.string,
  className: propTypes.string,
  containerClassName: propTypes.string,
  children: propTypes.node,
};
