
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cloud, Shield, Users } from "lucide-react";

interface InfrastructureItemProps {
  id: string;
  type: string;
  name: string;
  status: string;
  details: any;
}

const InfrastructureCard = ({ item }: { item: InfrastructureItemProps }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'EC2 Instance':
        return <Cloud className="h-5 w-5 text-blue-500" />;
      case 'Security Group':
        return <Shield className="h-5 w-5 text-green-500" />;
      case 'IAM Role':
        return <Users className="h-5 w-5 text-purple-500" />;
      default:
        return <Cloud className="h-5 w-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'stopped':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <Card className="overflow-hidden cloud-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            {getIcon(item.type)}
            <CardTitle className="ml-2 text-lg">{item.name}</CardTitle>
          </div>
          <Badge className={getStatusColor(item.status)}>
            {item.status}
          </Badge>
        </div>
        <CardDescription>{item.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="my-3" />
        <div className="text-sm">
          {item.type === 'EC2 Instance' && (
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Type:</span>
                <span>{item.details.instanceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Region:</span>
                <span>{item.details.region}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Public IP:</span>
                <span>{item.details.publicIp}</span>
              </div>
            </div>
          )}
          
          {item.type === 'Security Group' && (
            <div className="space-y-2">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Ingress Rules:</span>
                <ul className="mt-1 space-y-1">
                  {item.details.ingressRules.slice(0, 2).map((rule: any, index: number) => (
                    <li key={index} className="text-xs">
                      {rule.port} | {rule.protocol} | {rule.source}
                    </li>
                  ))}
                  {item.details.ingressRules.length > 2 && (
                    <li className="text-xs text-gray-500">+{item.details.ingressRules.length - 2} more</li>
                  )}
                </ul>
              </div>
            </div>
          )}
          
          {item.type === 'IAM Role' && (
            <div className="space-y-2">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Policies:</span>
                <ul className="mt-1">
                  {item.details.policies.map((policy: string, index: number) => (
                    <li key={index} className="text-xs">{policy}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfrastructureCard;
