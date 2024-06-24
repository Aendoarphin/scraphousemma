"use client";
const Error = ({ error }) => {
  return <div className="h-full border">{error.message}</div>;
}

export default Error;