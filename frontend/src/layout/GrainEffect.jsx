export default function GrainEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-[300%] w-[300%] -left-[100%] -top-[100%] opacity-[0.04] mix-blend-overlay">
      <div 
        className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] animate-grain"
        style={{ backgroundSize: "256px" }}
      />
    </div>
  );
}