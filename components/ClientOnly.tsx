"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted)
    return (
      <div className="loading">
        <div className="lds-dual-ring"></div>
      </div>
    );

  return <>{children}</>;
};

export default ClientOnly;
