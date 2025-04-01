# Cloud Symphony Automation Dashboard

[![Dashboard Preview](https://i.postimg.cc/gJmKg9xT/temp-Image4-Xnndr.avif)](https://postimg.cc/JyYJh2cN)

A DevOps project demonstrating cloud infrastructure automation with Terraform/Ansible, featuring a visualization dashboard for infrastructure provisioning and configuration management.

* App: A simple Flask-based REST API that returns system health and metrics.

* Tech Stack: Terraform (for provisioning cloud infrastructure), Ansible (for server configuration), AWS/GCP/Azure, Docker, Nginx, Systemd.

* Goal: Automate provisioning of an EC2-like instance, deploy the app, and configure it with Ansible.


## Objective

Create a DevOps project that provisions and configures cloud infrastructure for a Flask-based REST API using Terraform and Ansible. The application should run on an AWS EC2 instance (or equivalent in GCP/Azure). The infrastructure includes:

* Terraform to provision an EC2 instance, a security group allowing HTTP(S) traffic, and an IAM role.

* Ansible to install required dependencies: Python, Flask, Docker, Systemd, and Nginx.

* Docker to containerize the Flask app.

* Nginx as a reverse proxy.

* Systemd to ensure the application runs as a service.

* A proper secrets management system (e.g., AWS Secrets Manager or environment variables).


## Features

- **Infrastructure Automation**
  - Terraform provisioning of EC2 instances, security groups, and IAM roles
  - Ansible configuration management
  - Dockerized Flask application with system health API
  - Nginx reverse proxy & Systemd service management

- **Visualization Dashboard**
  - Real-time cloud resource monitoring
  - Infrastructure-as-Code (IaC) visualization
  - CI/CD pipeline tracking
  - Server health metrics (CPU/Memory/Disk)

## Tech Stack

| Component              | Technologies/Tools |
|------------------------|--------------------|
| Cloud Infrastructure   | AWS/GCP/Azure      |
| Provisioning           | Terraform          |
| Configuration          | Ansible            |
| Application Stack      | Flask, Docker, Nginx |
| Dashboard              | React, TypeScript, Tailwind CSS |
| CI/CD                  | GitHub Actions     |

## Project Structure

```plaintext
cloud-symphony/
├── src/
│   ├── components/       # Dashboard UI Components
│   │   ├── Dashboard.tsx           # Main layout
│   │   ├── HealthMetrics.tsx       # Real-time metrics
│   │   ├── InfrastructureCard.tsx  # Resource visualization
│   │   └── ...                    # Other components
│   │
│   ├── utils/
│   │   ├── mockData.ts            # Sample infrastructure data
│   │   └── useMockHealth.tsx      # Simulated metrics hook
│
├── infrastructure/       # IaC Configuration
│   ├── terraform/        # [PLACEHOLDER] Terraform scripts
│   └── ansible/          # [PLACEHOLDER] Ansible playbooks
│
└── ...                  # Other project files
Getting Started


---

## 🔑 Handling Secrets & Sensitive Information

- Follow DevOps best practices for **secrets management**.
- Use **environment variables or AWS Secrets Manager** to protect confidential data.
- Provide **placeholder links** for EC2 instances to simulate real setup while hiding sensitive data.
- Include **clear instructions** for replacing secrets and variables.


---

## 🎨 Customizing the Project

### **Dashboard.tsx**
The main dashboard layout that organizes sections for cloud resources, Infrastructure as Code, and health metrics.

**Customization:**
- **Lines 11-13:** Change the title and description.
- **Line 20:** Adjust the grid layout (`grid-cols`) to fit your design.

---

### **HealthMetrics.tsx**
Displays real-time server health metrics with color-coded progress bars.

**Customization:**
- **Lines 11-14, 16-20:** Adjust thresholds in `getColorClass` and `getProgressColor` functions.
- **Lines 57, 74, 91:** Modify display text or metric naming.
- **Add additional metrics** by copying and modifying existing blocks.

---

### **InfrastructureCard.tsx**
Renders cards for cloud resources like EC2 instances and IAM roles.

**Customization:**
- **Lines 18-26:** Modify the `getIcon` function for different resource types.
- **Lines 29-38:** Adjust status colors for your terminology.
- **Lines 76-116:** Update displayed details for each resource type.

---

### **TerraformViewer.tsx**
Displays Terraform configuration with syntax highlighting and a resource graph.

**Customization:**
- **Line 11:** Change the card title.
- **Lines 35-58:** Modify the resource graph visualization.
- **Terraform code:** Update `mockData.ts`.

---

### **AnsibleStatus.tsx**
Shows the status of Ansible playbook executions and configuration runs.

**Customization:**
- **Lines 17-27:** Modify `getTaskIcon` for task status types.
- **Line 53:** Change the card title or description.
- **Lines 67-91:** Adjust task summaries display.

---

### **WorkflowVisualizer.tsx**
Visualizes a CI/CD pipeline using GitHub Actions.

**Customization:**
- **Lines 8-22:** Adjust `getStatusIcon` for your workflow steps.
- **Lines 24-38:** Modify `getStatusBadge` to match your terminology.
- **Line 48:** Change the title and description.

---

### **useMockHealth.tsx**
A React hook that simulates changing server health metrics.

**Customization:**
- **Lines 19-26:** Adjust value ranges to simulate server behavior.
- **Line 29:** Change the update interval (default: 3 seconds).
- **Add/remove metrics** as needed.

---

### **mockData.ts**
Holds all mock data for infrastructure, Terraform, Ansible, and CI/CD workflows.

**Customization:**
- **Lines 3-42:** Update `infrastructureItems` with real cloud resources.
- **Lines 45-101:** Modify `terraformState` to match your infrastructure.
- **Lines 104-133:** Update `ansibleRuns` with deployment details.
- **Lines 136-161:** Adjust `workflowSteps` to match your CI/CD pipeline.
- **Lines 164-236:** Replace `terraformConfiguration` with your Terraform code.
- **Lines 239-301:** Update `ansiblePlaybook` with your Ansible code.

---

### **ui/progress.tsx**
A **shadcn UI** component for dynamic progress bars.

**Customization:**
- **Line 12:** Adjust base styling classes.
- **Line 18:** Modify indicator styling.

---

This guide ensures each component is fully customizable to match your infrastructure and design. 🚀

---

## **Deployment Instructions**

### 📥 Obtain the Code:
```sh
git clone https://github.com/your-username/cloud-symphony.git
cd cloud-symphony

---


### 📦 Install Dependencies:
```sh
npm install

---

### ⚙️ Configure the Application:
• Update mockData.ts to reflect real infrastructure details.
• Configure API keys and cloud provider credentials.

--

### 🔄 Test Locally:
```sh
npm run dev

• Open localhost:8080 to check functionality.

---

### 📤 Build for Production:
```sh
npm run build

---

### 🚀 Deploy to Hosting:

Netlify:
```sh
netlify deploy --prod

Vercel:
```sh
vercel

GitHub Pages:
```sh
npm run deploy

--

### 🌐 Custom Domain Setup (Optional):
• Add domain in hosting provider dashboard.
• Update DNS settings (A record, CNAME).

---

### 🛠 Set Up Continuous Deployment (Optional):
• Connect GitHub repository to hosting provider.
• Configure build settings for automatic deployment on push.

---

### 📊 Monitor Your Deployment:
    • Test all functionality.
    • Set up monitoring tools (e.g., UptimeRobot).

---

### 🔮 Future Enhancements:
• Replace mock data with real API calls.
• Implement authentication for secure access.
• Set up real-time cloud monitoring.
• Improve error handling & logging.

⸻

This guide ensures you can deploy Cloud Symphony while customizing it to your infrastructure setup. 🚀

