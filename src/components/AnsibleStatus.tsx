
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import { ansibleRuns } from "@/utils/mockData";

const AnsibleStatus = () => {
  const latestRun = ansibleRuns[0];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getTaskIcon = (status: string) => {
    switch (status) {
      case 'ok':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'skipped':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getProgressValue = () => {
    const total = latestRun.tasksCompleted + latestRun.tasksFailed + latestRun.tasksSkipped;
    return (latestRun.tasksCompleted / total) * 100;
  };

  return (
    <Card className="mt-6 cloud-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Ansible Execution</CardTitle>
            <CardDescription>
              Latest configuration run: {latestRun.playbook}
            </CardDescription>
          </div>
          <Badge className={latestRun.status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}>
            {latestRun.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-gray-500 dark:text-gray-400">Host:</span> {latestRun.host}
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Run Time:</span> {formatDate(latestRun.startTime)}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Tasks Completion</span>
              <span>
                {latestRun.tasksCompleted} / {latestRun.tasksCompleted + latestRun.tasksFailed + latestRun.tasksSkipped}
              </span>
            </div>
            <Progress value={getProgressValue()} className="h-2" />
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium text-sm mb-2">Task Summary</h4>
            <div className="space-y-2">
              {latestRun.summary.map((task, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-md text-sm">
                  <div className="flex items-center gap-2">
                    {getTaskIcon(task.status)}
                    <span>{task.task}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">{task.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnsibleStatus;
