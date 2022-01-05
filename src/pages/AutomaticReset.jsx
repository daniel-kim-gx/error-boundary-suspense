import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import Header from "../components/Header";

// ErrorBoundary
function ErrorFallback(props) {
  const { error, resetErrorBoundary } = props;
  console.log("fallback props:", props);

  useEffect(() => {
    toast("3초 뒤에 재시도하세요.");

    setTimeout(() => {
      resetErrorBoundary();
    }, 3000);
  }, []);

  return (
    <div>
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function Bomb() {
  throw new Error("Bomb!!");
  return null;
}

function About() {
  const [explode, setExplode] = useState(false);

  return (
    <div>
      <Header />
      This is about page
      <div>
        <button onClick={() => setExplode(true)}>Load bomb!</button>
      </div>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        onError={() => {
          console.log("onError called!");
        }}
        resetKeys={[explode]}
      >
        {explode ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  );
}

export default About;
