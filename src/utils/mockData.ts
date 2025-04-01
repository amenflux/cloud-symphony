
// Mock infrastructure components (EC2, Security Group, IAM roles)
export const infrastructureItems = [
  {
    id: 'ec2-01',
    type: 'EC2 Instance',
    name: 'api-server-production',
    status: 'running',
    details: {
      instanceType: 't2.micro',
      region: 'us-west-2',
      publicIp: '54.XXX.XXX.XX',
      privateIp: '10.0.1.XX',
    }
  },
  {
    id: 'sg-01',
    type: 'Security Group',
    name: 'api-server-sg',
    status: 'active',
    details: {
      ingressRules: [
        { port: 80, source: '0.0.0.0/0', protocol: 'TCP' },
        { port: 443, source: '0.0.0.0/0', protocol: 'TCP' },
        { port: 22, source: '10.0.0.0/8', protocol: 'TCP' }
      ],
      egressRules: [
        { port: 'All', destination: '0.0.0.0/0', protocol: 'All' }
      ]
    }
  },
  {
    id: 'iam-01',
    type: 'IAM Role',
    name: 'api-server-role',
    status: 'active',
    details: {
      policies: ['AmazonS3ReadOnlyAccess', 'CloudWatchAgentServerPolicy'],
      trustedEntities: ['ec2.amazonaws.com']
    }
  }
];

// Mock Terraform configuration state
export const terraformState = {
  version: 4,
  terraform_version: '1.5.0',
  serial: 15,
  lineage: 'a1b2c3d4-e5f6-g7h8-i9j0',
  resources: [
    {
      mode: 'managed',
      type: 'aws_instance',
      name: 'api_server',
      provider: 'provider["registry.terraform.io/hashicorp/aws"]',
      instances: [
        {
          schema_version: 1,
          attributes: {
            ami: 'ami-0c55b159cbfafe1f0',
            instance_type: 't2.micro',
            tags: {
              Name: 'api-server-production'
            }
          }
        }
      ]
    },
    {
      mode: 'managed',
      type: 'aws_security_group',
      name: 'api_server_sg',
      provider: 'provider["registry.terraform.io/hashicorp/aws"]',
      instances: [
        {
          schema_version: 1,
          attributes: {
            name: 'api-server-sg',
            description: 'Security group for API server',
            ingress: [
              {
                from_port: 80,
                to_port: 80,
                protocol: 'tcp',
                cidr_blocks: ['0.0.0.0/0']
              },
              {
                from_port: 443,
                to_port: 443,
                protocol: 'tcp',
                cidr_blocks: ['0.0.0.0/0']
              },
              {
                from_port: 22,
                to_port: 22,
                protocol: 'tcp',
                cidr_blocks: ['10.0.0.0/8']
              }
            ]
          }
        }
      ]
    }
  ]
};

// Mock Ansible playbook runs
export const ansibleRuns = [
  {
    id: 'run-001',
    playbook: 'setup_app.yml',
    status: 'success',
    startTime: '2023-10-15T14:30:00Z',
    endTime: '2023-10-15T14:35:10Z',
    host: 'api-server-production',
    tasksCompleted: 12,
    tasksFailed: 0,
    tasksSkipped: 2,
    summary: [
      { task: 'Install Python dependencies', status: 'ok', duration: '15s' },
      { task: 'Configure Docker', status: 'ok', duration: '25s' },
      { task: 'Set up Nginx as reverse proxy', status: 'ok', duration: '18s' },
      { task: 'Create systemd service file', status: 'ok', duration: '5s' },
      { task: 'Start application', status: 'ok', duration: '10s' }
    ]
  },
  {
    id: 'run-002',
    playbook: 'update_app.yml',
    status: 'success',
    startTime: '2023-10-20T09:15:00Z',
    endTime: '2023-10-20T09:17:45Z',
    host: 'api-server-production',
    tasksCompleted: 5,
    tasksFailed: 0,
    tasksSkipped: 1,
    summary: [
      { task: 'Pull latest Docker image', status: 'ok', duration: '10s' },
      { task: 'Update configuration', status: 'ok', duration: '5s' },
      { task: 'Restart application', status: 'ok', duration: '8s' }
    ]
  }
];

// Mock workflow steps
export const workflowSteps = [
  {
    id: 'step-1',
    name: 'Terraform Plan',
    status: 'completed',
    duration: '45s',
    details: 'Resources to create: 3, change: 0, destroy: 0'
  },
  {
    id: 'step-2',
    name: 'Terraform Apply',
    status: 'completed',
    duration: '2m 15s',
    details: 'Applied 3 resources successfully'
  },
  {
    id: 'step-3',
    name: 'Ansible Setup',
    status: 'completed',
    duration: '5m 10s',
    details: '12 tasks completed successfully'
  },
  {
    id: 'step-4',
    name: 'Application Deployment',
    status: 'in-progress',
    duration: '1m 30s',
    details: 'Deploying Flask application'
  },
  {
    id: 'step-5',
    name: 'Validation',
    status: 'pending',
    duration: '0s',
    details: 'Waiting for deployment to complete'
  }
];

// Mock terraform configuration code
export const terraformConfiguration = `resource "aws_instance" "api_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  key_name      = var.key_name
  vpc_security_group_ids = [aws_security_group.api_server_sg.id]
  
  tags = {
    Name = "api-server-production"
    Environment = "production"
  }
}

resource "aws_security_group" "api_server_sg" {
  name        = "api-server-sg"
  description = "Security group for API server"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_iam_role" "api_server_role" {
  name = "api-server-role"
  
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}`;

// Mock ansible playbook content
export const ansiblePlaybook = `---
- name: Setup API Server
  hosts: api_server
  become: yes
  vars:
    app_dir: /opt/flask-app
    app_user: app
    app_group: app
    
  tasks:
    - name: Install required packages
      apt:
        name:
          - python3
          - python3-pip
          - python3-venv
          - nginx
          - docker.io
        state: present
        update_cache: yes
        
    - name: Create app directory
      file:
        path: "{{ app_dir }}"
        state: directory
        owner: "{{ app_user }}"
        group: "{{ app_group }}"
        mode: '0755'
        
    - name: Configure Nginx as reverse proxy
      template:
        src: templates/nginx.conf.j2
        dest: /etc/nginx/sites-available/flask-app
        owner: root
        group: root
        mode: '0644'
      notify: Restart Nginx
      
    - name: Enable Nginx site
      file:
        src: /etc/nginx/sites-available/flask-app
        dest: /etc/nginx/sites-enabled/flask-app
        state: link
      notify: Restart Nginx
      
    - name: Create systemd service file
      template:
        src: templates/flask-app.service.j2
        dest: /etc/systemd/system/flask-app.service
        owner: root
        group: root
        mode: '0644'
      notify: Restart Flask App
        
  handlers:
    - name: Restart Nginx
      service:
        name: nginx
        state: restarted
        
    - name: Restart Flask App
      systemd:
        name: flask-app
        state: restarted
        daemon_reload: yes
        enabled: yes`;
