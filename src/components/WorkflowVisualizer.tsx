
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle, Play } from "lucide-react";
import { workflowSteps } from "@/utils/mockData";

const WorkflowVisualizer = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Play className="h-5 w-5 text-blue-500 animate-pulse-slow" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />;
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">In Progress</Badge>;
      case 'pending':
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Failed</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="mt-6 cloud-card">
      <CardHeader>
        <CardTitle className="text-xl">Automation Workflow</CardTitle>
        <CardDescription>
          GitHub Actions deployment pipeline
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < workflowSteps.length - 1 && (
                <div 
                  className={`absolute left-6 top-8 w-0.5 h-14 
                    ${step.status === 'pending' ? 'bg-gray-200 dark:bg-gray-700' : 
                      step.status === 'in-progress' ? 'bg-blue-200 dark:bg-blue-800' : 
                      'bg-green-200 dark:bg-green-800'}`}
                ></div>
              )}
              <div className="flex items-start">
                <div className="rounded-full p-2 mr-4 flex-shrink-0">
                  {getStatusIcon(step.status)}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium">{step.name}</h4>
                    {getStatusBadge(step.status)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {step.details}
                  </div>
                  {step.duration && (
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Duration: {step.duration}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkflowVisualizer;
