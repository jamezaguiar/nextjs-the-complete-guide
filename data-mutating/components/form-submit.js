"use client";

import { useFormStatus } from "react-dom";

export function FormSubmit() {
  const { action, data, method, pending } = useFormStatus();

  if (pending) {
    return <p>Creating post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
