
import { infrastructureItems } from "@/utils/mockData";
import InfrastructureCard from "@/components/InfrastructureCard";
import TerraformViewer from "@/components/TerraformViewer";
import AnsibleStatus from "@/components/AnsibleStatus";
import HealthMetrics from "@/components/HealthMetrics";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Cloud Infrastructure</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Overview of your provisioned resources and automation status
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infrastructureItems.map((item) => (
          <InfrastructureCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Infrastructure as Code</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TerraformViewer />
          <AnsibleStatus />
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Application Health & Deployment</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HealthMetrics />
          <WorkflowVisualizer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
