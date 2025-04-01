
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useMockHealth } from "@/hooks/useMockHealth";
import { Cpu, HardDrive, MemoryStick, Clock, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const HealthMetrics = () => {
  const metrics = useMockHealth();

  const getColorClass = (value: number, thresholds: { warn: number; critical: number }) => {
    if (value >= thresholds.critical) return "text-red-500";
    if (value >= thresholds.warn) return "text-yellow-500";
    return "text-green-500";
  };

  const getProgressColor = (value: number, thresholds: { warn: number; critical: number }) => {
    if (value >= thresholds.critical) return "bg-red-500";
    if (value >= thresholds.warn) return "bg-yellow-500";
    return "bg-green-500";
  };

  const formatNumber = (num: number, decimals = 0) => {
    return num.toFixed(decimals);
  };

  return (
    <Card className="mt-6 cloud-card">
      <CardHeader>
        <CardTitle className="text-xl">Server Health</CardTitle>
        <CardDescription>
          Real-time metrics from Flask application
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* CPU Usage */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-blue-500" />
                <span className="font-medium">CPU Usage</span>
              </div>
              <span className={`text-lg font-bold ${getColorClass(metrics.cpu, { warn: 50, critical: 80 })}`}>
                {formatNumber(metrics.cpu)}%
              </span>
            </div>
            <Progress 
              value={metrics.cpu} 
              className={cn("h-2", getProgressColor(metrics.cpu, { warn: 50, critical: 80 }))}
            />
          </div>

          {/* Memory Usage */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <MemoryStick className="h-5 w-5 mr-2 text-purple-500" />
                <span className="font-medium">Memory Usage</span>
              </div>
              <span className={`text-lg font-bold ${getColorClass(metrics.memory, { warn: 60, critical: 85 })}`}>
                {formatNumber(metrics.memory)}%
              </span>
            </div>
            <Progress 
              value={metrics.memory} 
              className={cn("h-2", getProgressColor(metrics.memory, { warn: 60, critical: 85 }))}
            />
          </div>

          {/* Disk Usage */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <HardDrive className="h-5 w-5 mr-2 text-amber-500" />
                <span className="font-medium">Disk Usage</span>
              </div>
              <span className={`text-lg font-bold ${getColorClass(metrics.disk, { warn: 70, critical: 90 })}`}>
                {formatNumber(metrics.disk)}%
              </span>
            </div>
            <Progress 
              value={metrics.disk} 
              className={cn("h-2", getProgressColor(metrics.disk, { warn: 70, critical: 90 }))}
            />
          </div>

          {/* Uptime */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-500" />
              <span className="font-medium">Uptime</span>
              <span className="ml-auto text-lg font-bold">{formatNumber(metrics.uptime)} hrs</span>
            </div>
          </div>

          {/* Requests per Minute */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <Activity className="h-5 w-5 mr-2 text-blue-500" />
              <span className="font-medium">Requests per Min</span>
              <span className="ml-auto text-lg font-bold">{formatNumber(metrics.requestsPerMinute)}</span>
            </div>
          </div>

          {/* Avg Response Time */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-amber-500" />
              <span className="font-medium">Response Time</span>
              <span className="ml-auto text-lg font-bold">{formatNumber(metrics.responseTime, 1)} ms</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthMetrics;
