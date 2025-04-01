
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { terraformConfiguration } from "@/utils/mockData";

const TerraformViewer = () => {
  const [activeTab, setActiveTab] = useState("code");

  return (
    <Card className="mt-6 cloud-card">
      <CardHeader>
        <CardTitle className="text-xl">Terraform Configuration</CardTitle>
        <CardDescription>
          Infrastructure as Code for cloud resources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="code" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="graph">Resource Graph</TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-md p-4 overflow-auto h-96">
              <pre className="text-xs md:text-sm code-block whitespace-pre-wrap">
                {terraformConfiguration}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="graph" className="mt-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 overflow-auto h-96 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <div className="text-blue-600 dark:text-blue-300 text-2xl font-bold">EC2</div>
                </div>
                <div className="border-l-2 border-dashed border-gray-400 h-10 mx-auto w-0"></div>
                <div className="flex items-center justify-center space-x-12">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <div className="text-green-600 dark:text-green-300 text-2xl font-bold">SG</div>
                  </div>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <div className="text-purple-600 dark:text-purple-300 text-sm font-bold">IAM</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                  Interactive resource graph visualization available in premium version
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TerraformViewer;
