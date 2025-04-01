
import { useState, useEffect } from 'react';

// Mock health metrics of the server
interface HealthMetrics {
  cpu: number;
  memory: number;
  disk: number;
  uptime: number;
  requestsPerMinute: number;
  responseTime: number;
}

export function useMockHealth() {
  const [metrics, setMetrics] = useState<HealthMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    uptime: 0,
    requestsPerMinute: 0,
    responseTime: 0
  });

  useEffect(() => {
    const updateMetrics = () => {
      // Simulate changing metrics
      setMetrics({
        cpu: Math.random() * 25 + 10, // 10-35%
        memory: Math.random() * 40 + 30, // 30-70%
        disk: Math.random() * 20 + 40, // 40-60%
        uptime: Math.floor(Math.random() * 48) + 72, // 72-120 hours
        requestsPerMinute: Math.floor(Math.random() * 50) + 10, // 10-60 rpm
        responseTime: Math.random() * 100 + 50 // 50-150ms
      });
    };

    // Initial update
    updateMetrics();

    // Update metrics every 3 seconds
    const intervalId = setInterval(updateMetrics, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return metrics;
}
