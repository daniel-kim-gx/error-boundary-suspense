import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "../components/Header";

function Bomb() {
  throw new Error("Bomb!!");
  return null;
}

function ErrorBoundaryNested() {
  const [explode1, setExplode1] = useState(false);
  const [explode2, setExplode2] = useState(false);

  const reset = () => {
    setExplode1(false);
    setExplode2(false);
  };

  return (
    <div>
      <Header />
      <h1>ErrorBoundaryNested</h1>
      <button onClick={() => setExplode1(true)}>Load bomb 1!</button>
      <button onClick={() => setExplode2(true)}>Load bomb 2!</button>
      <button onClick={reset}>Reset </button>

      <ErrorBoundary
        FallbackComponent={() => <div>Error from upper component.</div>}
        onReset={() => setExplode1(false)}
        onError={() => {
          console.log("onError called!");
        }}
        resetKeys={[explode1]}
      >
        {explode1 ? <Bomb /> : null}
      </ErrorBoundary>

      <ErrorBoundary
        FallbackComponent={() => <div>Error from lower component.</div>}
        onReset={() => setExplode2(false)}
        onError={() => {
          console.log("onError called!");
        }}
        resetKeys={[explode2]}
      >
        {explode2 ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundaryNested;
