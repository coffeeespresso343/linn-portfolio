import { useEffect } from "react";

const useCursor = () => {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    const cursor = document.getElementById("cursor");
    const trail = document.getElementById("cursor-trail");

    if (!cursor || !trail) return;

    // Disable custom cursor on touch devices

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let trailX = mouseX;
    let trailY = mouseY;

    let animationId;

    const updateCursor = () => {
      // Smooth trailing movement
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;

      animationId = requestAnimationFrame(updateCursor);
    };

    const handlePointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.classList.add("cursor-hover");
      trail.classList.add("cursor-trail-hover");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-hover");
      trail.classList.remove("cursor-trail-hover");
    };

    // Event delegation — works for dynamically rendered buttons/links too
    const handlePointerOver = (e) => {
      const target = e.target.closest("a, button");

      if (target) {
        handleMouseEnter();
      }
    };

    const handlePointerOut = (e) => {
      const target = e.target.closest("a, button");

      if (!target) return;

      const relatedTarget = e.relatedTarget;

      // Don't trigger leave when moving between children
      if (target.contains(relatedTarget)) return;

      handleMouseLeave();
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    animationId = requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);

      cancelAnimationFrame(animationId);
    };
  }, []);
};

export default useCursor;
