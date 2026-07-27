export default [
    {
        id: "cloud-1",
        question: "A startup wants to minimize upfront infrastructure costs and only pay for the resources it actually consumes. Which cloud pricing model best fits this requirement?",
        options: [
            "Reserved Instances with a 1-year commitment",
            "Pay-as-you-go",
            "Dedicated host pricing",
            "Bringing your own license (BYOL)"
        ],
        answer: 1,
        explanation: "Pay-as-you-go pricing charges only for the resources consumed with no upfront commitment, making it ideal for startups with unpredictable workloads.",
        difficulty: "Easy",
        topic: "Cloud Fundamentals"
    },
    {
        id: "cloud-2",
        question: "Which cloud characteristic enables a user to provision additional compute resources within minutes without requiring human interaction from the service provider?",
        options: [
            "Resource pooling",
            "Rapid elasticity",
            "Measured service",
            "Broad network access"
        ],
        answer: 1,
        explanation: "Rapid elasticity allows capabilities to be elastically provisioned and released to scale rapidly outward and inward commensurate with demand.",
        difficulty: "Easy",
        topic: "Characteristics of Cloud Computing"
    },
    {
        id: "cloud-3",
        question: "An organization runs its entire infrastructure on-premises but uses a SaaS email service. Which cloud deployment model does this represent?",
        options: [
            "Public Cloud",
            "Private Cloud",
            "Hybrid Cloud",
            "Community Cloud"
        ],
        answer: 2,
        explanation: "Hybrid Cloud combines on-premises infrastructure with cloud-based services, which matches this scenario of local infrastructure plus SaaS email.",
        difficulty: "Easy",
        topic: "Hybrid Cloud"
    },
    {
        id: "cloud-4",
        question: "In the shared responsibility model of cloud computing, which of the following is ALWAYS the responsibility of the cloud provider?",
        options: [
            "Encrypting application data at rest",
            "Patching the guest operating system",
            "Securing application access through IAM policies",
            "Physical security of the data center"
        ],
        answer: 3,
        explanation: "Physical security of data centers is always the provider's responsibility, while OS patching, data encryption, and IAM policies fall under customer responsibility in IaaS.",
        difficulty: "Easy",
        topic: "Shared Responsibility Model"
    },
    {
        id: "cloud-5",
        question: "Which cloud service model provides the customer with the highest level of control over the underlying infrastructure?",
        options: [
            "Software as a Service",
            "Platform as a Service",
            "Infrastructure as a Service",
            "Function as a Service"
        ],
        answer: 2,
        explanation: "IaaS provides the highest level of control among cloud service models, giving customers access to virtual machines, networking, and storage while the provider manages the physical hardware.",
        difficulty: "Easy",
        topic: "IaaS"
    },
    {
        id: "cloud-6",
        question: "A company uses Microsoft 365 for email and document collaboration. Which cloud service model are they consuming?",
        options: [
            "IaaS",
            "PaaS",
            "SaaS",
            "FaaS"
        ],
        answer: 2,
        explanation: "Microsoft 365 is a fully managed software solution delivered over the internet, which is the definition of Software as a Service.",
        difficulty: "Easy",
        topic: "SaaS"
    },
    {
        id: "cloud-7",
        question: "What is the primary function of a hypervisor in cloud computing?",
        options: [
            "Managing network traffic between virtual machines",
            "Creating and managing virtual machines on physical hardware",
            "Encrypting data flowing between cloud regions",
            "Balancing load across multiple application instances"
        ],
        answer: 1,
        explanation: "A hypervisor (or Virtual Machine Monitor) creates and runs virtual machines by partitioning the physical hardware resources and allocating them to VMs.",
        difficulty: "Easy",
        topic: "Hypervisors"
    },
    {
        id: "cloud-8",
        question: "Which type of hypervisor runs directly on the bare-metal hardware without a host operating system?",
        options: [
            "Type 1 Hypervisor",
            "Type 2 Hypervisor",
            "Container runtime",
            "Application-level hypervisor"
        ],
        answer: 0,
        explanation: "Type 1 (bare-metal) hypervisors like VMware ESXi, Microsoft Hyper-V, and KVM run directly on physical hardware, providing better performance and security than Type 2 hypervisors.",
        difficulty: "Easy",
        topic: "Hypervisors"
    },
    {
        id: "cloud-9",
        question: "A Docker container shares which of the following with the host system?",
        options: [
            "Its own dedicated kernel",
            "The host's operating system kernel",
            "Its own file system independent of the host",
            "Its own network namespace by default"
        ],
        answer: 1,
        explanation: "Containers share the host OS kernel unlike virtual machines which have their own guest OS kernel, making containers lighter and faster to start.",
        difficulty: "Easy",
        topic: "Docker Containers"
    },
    {
        id: "cloud-10",
        question: "Which Docker command builds an image from a Dockerfile?",
        options: [
            "docker run",
            "docker build",
            "docker create",
            "docker compose"
        ],
        answer: 1,
        explanation: "The `docker build` command reads a Dockerfile and constructs a Docker image according to the instructions specified in the file.",
        difficulty: "Easy",
        topic: "Dockerfile"
    },
    {
        id: "cloud-11",
        question: "In AWS, which service acts as a virtual firewall at the instance level to control inbound and outbound traffic?",
        options: [
            "Network ACL",
            "Security Group",
            "AWS WAF",
            "VPC Flow Logs"
        ],
        answer: 1,
        explanation: "Security Groups act as a virtual firewall at the instance level, controlling inbound and outbound traffic for EC2 instances. Network ACLs operate at the subnet level.",
        difficulty: "Easy",
        topic: "Security Groups"
    },
    {
        id: "cloud-12",
        question: "What is the purpose of an Amazon Machine Image (AMI)?",
        options: [
            "To store application logs persistently",
            "To serve as a template for launching EC2 instances",
            "To route traffic between VPC subnets",
            "To monitor resource utilization metrics"
        ],
        answer: 1,
        explanation: "An AMI provides the information required to launch an EC2 instance, including the operating system, application server, and applications.",
        difficulty: "Easy",
        topic: "AMI"
    },
    {
        id: "cloud-13",
        question: "Which AWS storage service is best suited for storing frequently accessed static website content?",
        options: [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "Amazon Glacier"
        ],
        answer: 1,
        explanation: "Amazon S3 is an object storage service ideal for hosting static websites, storing and retrieving any amount of data from anywhere on the web.",
        difficulty: "Easy",
        topic: "S3"
    },
    {
        id: "cloud-14",
        question: "AWS Auto Scaling ensures which of the following?",
        options: [
            "Application code is automatically updated",
            "The number of EC2 instances adjusts automatically based on demand",
            "Database backups are performed automatically every hour",
            "Security groups are automatically configured for new instances"
        ],
        answer: 1,
        explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances based on defined conditions and demand, ensuring application availability and cost efficiency.",
        difficulty: "Easy",
        topic: "Auto Scaling"
    },
    {
        id: "cloud-15",
        question: "Which Azure service is used to create and manage virtual networks in the cloud?",
        options: [
            "Azure Virtual Machines",
            "Azure Virtual Network (VNet)",
            "Azure Load Balancer",
            "Azure DNS"
        ],
        answer: 1,
        explanation: "Azure Virtual Network (VNet) is the fundamental building block for private networks in Azure, enabling resources like VMs to securely communicate with each other.",
        difficulty: "Easy",
        topic: "Azure Virtual Network"
    },
    {
        id: "cloud-16",
        question: "In Google Cloud Platform, which service provides fully managed, petabyte-scale data warehouse for analytics?",
        options: [
            "Cloud SQL",
            "Cloud Spanner",
            "BigQuery",
            "Cloud Datastore"
        ],
        answer: 2,
        explanation: "BigQuery is GCP's fully managed, serverless, petabyte-scale data warehouse designed for analytics, allowing SQL queries on large datasets without managing infrastructure.",
        difficulty: "Easy",
        topic: "BigQuery"
    },
    {
        id: "cloud-17",
        question: "Which GCP service allows you to run stateless containers without managing the underlying infrastructure?",
        options: [
            "Compute Engine",
            "Google Kubernetes Engine",
            "Cloud Run",
            "App Engine"
        ],
        answer: 2,
        explanation: "Cloud Run is a serverless platform that runs stateless containers without requiring you to manage the underlying infrastructure, scaling from zero to full demand.",
        difficulty: "Easy",
        topic: "Cloud Run"
    },
    {
        id: "cloud-18",
        question: "What is the primary benefit of using a Content Delivery Network (CDN) like Amazon CloudFront?",
        options: [
            "It encrypts all data at rest",
            "It reduces latency by caching content at edge locations closer to users",
            "It automatically scales databases based on read capacity",
            "It provides DDoS protection at the application layer only"
        ],
        answer: 1,
        explanation: "A CDN reduces latency by caching content at edge locations worldwide, allowing users to access data from a geographically closer point of presence.",
        difficulty: "Easy",
        topic: "CDN"
    },
    {
        id: "cloud-19",
        question: "Which DNS record type is used to map a domain name to an IPv4 address?",
        options: [
            "CNAME",
            "MX",
            "A",
            "TXT"
        ],
        answer: 2,
        explanation: "An A record maps a domain name to an IPv4 address, which is the most fundamental type of DNS record for resolving domain names.",
        difficulty: "Easy",
        topic: "DNS"
    },
    {
        id: "cloud-20",
        question: "A load balancer distributes incoming traffic across multiple targets. Which type of load balancer operates at Layer 7 of the OSI model?",
        options: [
            "Network Load Balancer",
            "Application Load Balancer",
            "Classic Load Balancer",
            "Gateway Load Balancer"
        ],
        answer: 1,
        explanation: "Application Load Balancers operate at Layer 7 and can make routing decisions based on HTTP headers, URL paths, and other application-level information.",
        difficulty: "Easy",
        topic: "Load Balancers"
    },
    {
        id: "cloud-21",
        question: "What does the 'measured service' characteristic of cloud computing refer to?",
        options: [
            "Cloud resources are measured by physical dimensions",
            "Resource usage can be monitored, controlled, and reported transparently",
            "Services are measured by the number of APIs called",
            "Performance is measured against on-premises benchmarks"
        ],
        answer: 1,
        explanation: "Measured service means cloud systems automatically control and optimize resource use by leveraging a metering capability, providing transparency for both provider and consumer.",
        difficulty: "Easy",
        topic: "Characteristics of Cloud Computing"
    },
    {
        id: "cloud-22",
        question: "Which cloud deployment model is shared among several organizations with common concerns such as compliance or security requirements?",
        options: [
            "Public Cloud",
            "Private Cloud",
            "Community Cloud",
            "Multi Cloud"
        ],
        answer: 2,
        explanation: "Community Cloud is shared by several organizations belonging to a specific community with shared concerns like compliance, security, or jurisdiction requirements.",
        difficulty: "Easy",
        topic: "Community Cloud"
    },
    {
        id: "cloud-23",
        question: "A developer writes a function that executes only when triggered by an HTTP request and runs for a few seconds. Which cloud computing model is most appropriate?",
        options: [
            "IaaS",
            "PaaS",
            "FaaS",
            "SaaS"
        ],
        answer: 2,
        explanation: "Function as a Service (FaaS) is ideal for event-driven, short-lived functions triggered by HTTP requests or other events, where the developer only writes the function logic.",
        difficulty: "Easy",
        topic: "FaaS"
    },
    {
        id: "cloud-24",
        question: "Which Azure service provides managed SQL database capabilities without requiring infrastructure management?",
        options: [
            "Azure SQL Database",
            "Azure Cosmos DB",
            "Azure Blob Storage",
            "Azure Table Storage"
        ],
        answer: 0,
        explanation: "Azure SQL Database is a fully managed relational database service that handles infrastructure management, patching, and backups automatically.",
        difficulty: "Easy",
        topic: "Azure Basics"
    },
    {
        id: "cloud-25",
        question: "What is the key difference between a virtual machine and a container?",
        options: [
            "VMs are faster to start than containers",
            "Containers include a full guest OS while VMs share the host kernel",
            "VMs virtualize hardware while containers virtualize the operating system",
            "Containers cannot communicate with each other on the same host"
        ],
        answer: 2,
        explanation: "VMs virtualize the underlying hardware with a full guest OS, while containers virtualize the OS level, sharing the host kernel and being more lightweight.",
        difficulty: "Easy",
        topic: "Virtual Machines"
    },
    {
        id: "cloud-26",
        question: "Which AWS service provides a managed relational database with automatic scaling and high availability?",
        options: [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon Neptune"
        ],
        answer: 1,
        explanation: "Amazon RDS is a managed relational database service that supports multiple database engines and provides automatic scaling, patching, and high availability with Multi-AZ deployments.",
        difficulty: "Easy",
        topic: "RDS"
    },
    {
        id: "cloud-27",
        question: "In Docker, what is the purpose of a Dockerfile?",
        options: [
            "To define the network configuration for containers",
            "To specify the instructions for building a Docker image",
            "To configure volume mounts for persistent storage",
            "To set environment variables at runtime"
        ],
        answer: 1,
        explanation: "A Dockerfile contains a set of instructions that define how to build a Docker image, including the base image, dependencies, and commands to run.",
        difficulty: "Easy",
        topic: "Dockerfile"
    },
    {
        id: "cloud-28",
        question: "Which AWS service is used to configure DNS routing for domain names?",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "Amazon API Gateway",
            "AWS Direct Connect"
        ],
        answer: 1,
        explanation: "Amazon Route 53 is a highly available and scalable cloud DNS web service that provides reliable and cost-effective domain name registration and DNS routing.",
        difficulty: "Easy",
        topic: "Route 53"
    },
    {
        id: "cloud-29",
        question: "What is the purpose of AWS Identity and Access Management (IAM)?",
        options: [
            "To manage database connections and query routing",
            "To securely control access to AWS services and resources",
            "To monitor network traffic and detect intrusions",
            "To automate infrastructure deployment workflows"
        ],
        answer: 1,
        explanation: "AWS IAM enables you to securely manage access to AWS services and resources for users, groups, roles, and policies through fine-grained access control.",
        difficulty: "Easy",
        topic: "IAM"
    },
    {
        id: "cloud-30",
        question: "Which type of cloud storage is most appropriate for attaching to a single EC2 instance for low-latency block-level access?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon Glacier"
        ],
        answer: 1,
        explanation: "Amazon EBS provides block-level storage volumes that attach to EC2 instances, offering low-latency and high-throughput access suitable for databases and boot volumes.",
        difficulty: "Easy",
        topic: "EBS"
    },
    {
        id: "cloud-31",
        question: "Which Azure service is the equivalent of AWS Lambda for serverless function execution?",
        options: [
            "Azure App Service",
            "Azure Functions",
            "Azure Logic Apps",
            "Azure Service Fabric"
        ],
        answer: 1,
        explanation: "Azure Functions is Azure's serverless compute service, equivalent to AWS Lambda, allowing you to run event-triggered code without managing infrastructure.",
        difficulty: "Easy",
        topic: "Azure Functions"
    },
    {
        id: "cloud-32",
        question: "What does a VPC (Virtual Private Cloud) provide in cloud computing?",
        options: [
            "A physical private network within a data center",
            "An isolated virtual network within the cloud where you can launch resources",
            "A VPN connection between two cloud providers",
            "A content delivery network for private content"
        ],
        answer: 1,
        explanation: "A VPC provides an isolated virtual network within the cloud where you can launch resources in a logically isolated section, with full control over IP addressing, subnets, and routing.",
        difficulty: "Easy",
        topic: "VPC"
    },
    {
        id: "cloud-33",
        question: "Which of the following is an advantage of using containers over virtual machines?",
        options: [
            "Containers provide stronger isolation than VMs",
            "Containers have their own dedicated kernel for better security",
            "Containers are more lightweight and start faster than VMs",
            "Containers can run different operating systems than the host"
        ],
        answer: 2,
        explanation: "Containers are more lightweight because they share the host OS kernel and don't need a full guest OS, resulting in faster startup times and lower resource overhead.",
        difficulty: "Easy",
        topic: "Containers"
    },
    {
        id: "cloud-34",
        question: "In AWS, which service provides object-level logging for S3 buckets to track access requests?",
        options: [
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Config",
            "S3 Server Access Logging"
        ],
        answer: 3,
        explanation: "S3 Server Access Logging provides detailed records of requests made to an S3 bucket, which is different from CloudTrail that logs API calls at the AWS account level.",
        difficulty: "Easy",
        topic: "S3"
    },
    {
        id: "cloud-35",
        question: "Which GCP service is equivalent to AWS EC2 for creating virtual machines?",
        options: [
            "Cloud Run",
            "App Engine",
            "Compute Engine",
            "Cloud Functions"
        ],
        answer: 2,
        explanation: "Google Compute Engine is GCP's IaaS offering that provides virtual machines, equivalent to AWS EC2, allowing full control over the operating system and runtime environment.",
        difficulty: "Easy",
        topic: "Compute Engine"
    },
    {
        id: "cloud-36",
        question: "What is the primary use case for Amazon EFS?",
        options: [
            "Boot volumes for EC2 instances",
            "Block storage for databases",
            "Shared file storage accessible from multiple EC2 instances simultaneously",
            "Archival storage for long-term retention"
        ],
        answer: 2,
        explanation: "Amazon EFS is a serverless, set-and-forget elastic file system that can be simultaneously mounted by multiple EC2 instances, ideal for shared file access.",
        difficulty: "Easy",
        topic: "EFS"
    },
    {
        id: "cloud-37",
        question: "Which Docker command lists all running containers?",
        options: [
            "docker images",
            "docker ps",
            "docker ls",
            "docker inspect"
        ],
        answer: 1,
        explanation: "The `docker ps` command lists all currently running containers. Adding the `-a` flag would show all containers including stopped ones.",
        difficulty: "Easy",
        topic: "Docker Containers"
    },
    {
        id: "cloud-38",
        question: "What is the role of an Internet Gateway in a VPC?",
        options: [
            "To allow communication between VPC subnets",
            "To enable resources in a VPC to communicate with the internet",
            "To provide DNS resolution for VPC resources",
            "To encrypt traffic leaving the VPC"
        ],
        answer: 1,
        explanation: "An Internet Gateway allows communication between resources in a VPC and the internet, serving as a horizontally scaled, redundant, and highly available entry point.",
        difficulty: "Easy",
        topic: "Internet Gateway"
    },
    {
        id: "cloud-39",
        question: "Which service in Azure is used to store and manage container images?",
        options: [
            "Azure Blob Storage",
            "Azure Container Registry",
            "Azure Artifacts",
            "Azure DevOps Repos"
        ],
        answer: 1,
        explanation: "Azure Container Registry is a managed, private Docker registry service used to build, store, and manage container images and artifacts.",
        difficulty: "Easy",
        topic: "Container Registry"
    },
    {
        id: "cloud-40",
        question: "In cloud computing, what does 'elasticity' specifically refer to?",
        options: [
            "The ability to stretch resources across multiple regions",
            "The ability to automatically scale resources up and down based on demand",
            "The flexibility to switch between cloud providers",
            "The capability to run applications on any operating system"
        ],
        answer: 1,
        explanation: "Elasticity specifically refers to the ability to automatically scale computing resources up or down based on current demand, ensuring optimal resource utilization.",
        difficulty: "Easy",
        topic: "Elasticity"
    },
    {
        id: "cloud-41",
        question: "Which AWS service provides a fully managed message queuing service for decoupling microservices?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon Kinesis",
            "Amazon MQ"
        ],
        answer: 1,
        explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables decoupling of microservices, distributed systems, and serverless applications.",
        difficulty: "Easy",
        topic: "SQS"
    },
    {
        id: "cloud-42",
        question: "What is the purpose of Docker Compose?",
        options: [
            "To build Docker images from source code",
            "To define and run multi-container Docker applications",
            "To orchestrate containers across multiple hosts",
            "To monitor container resource usage"
        ],
        answer: 1,
        explanation: "Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file to configure all services, networks, and volumes.",
        difficulty: "Easy",
        topic: "Docker Compose"
    },
    {
        id: "cloud-43",
        question: "Which AWS service provides real-time monitoring of AWS resources and applications?",
        options: [
            "AWS CloudTrail",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS X-Ray"
        ],
        answer: 2,
        explanation: "Amazon CloudWatch provides real-time monitoring and observability of AWS resources and applications, collecting metrics, logs, and events.",
        difficulty: "Easy",
        topic: "CloudWatch"
    },
    {
        id: "cloud-44",
        question: "In the context of cloud networking, what does NAT Gateway do?",
        options: [
            "Translates private IP addresses to public IP addresses for outbound internet access",
            "Translates public IP addresses to private IP addresses for inbound access",
            "Routes traffic between different VPCs",
            "Filters malicious traffic at the network layer"
        ],
        answer: 0,
        explanation: "A NAT Gateway enables instances in private subnets to connect to the internet or other AWS services while preventing the internet from initiating connections to those instances.",
        difficulty: "Easy",
        topic: "NAT Gateway"
    },
    {
        id: "cloud-45",
        question: "Which GCP service provides managed, scalable NoSQL document database?",
        options: [
            "Cloud SQL",
            "Cloud Spanner",
            "Firestore",
            "BigQuery"
        ],
        answer: 2,
        explanation: "Firestore is GCP's managed NoSQL document database that provides seamless integration with mobile and web applications with real-time synchronization capabilities.",
        difficulty: "Easy",
        topic: "Cloud Databases"
    },
    {
        id: "cloud-46",
        question: "What is the main advantage of using Reserved Instances over On-Demand Instances in AWS?",
        options: [
            "Reserved Instances provide better performance",
            "Reserved Instances offer significant cost savings for consistent workloads",
            "Reserved Instances can be stopped and started at any time",
            "Reserved Instances do not require any commitment"
        ],
        answer: 1,
        explanation: "Reserved Instances provide significant cost savings (up to 72%) compared to On-Demand pricing when you commit to a specific usage term (1 or 3 years) for consistent workloads.",
        difficulty: "Easy",
        topic: "Reserved Instances"
    },
    {
        id: "cloud-47",
        question: "Which Azure service provides centralized identity management and access control?",
        options: [
            "Azure Network Watcher",
            "Azure Active Directory (Entra ID)",
            "Azure Key Vault",
            "Azure Security Center"
        ],
        answer: 1,
        explanation: "Azure Active Directory (now Entra ID) provides centralized identity management, single sign-on, and access control for cloud and on-premises applications.",
        difficulty: "Easy",
        topic: "Azure Active Directory"
    },
    {
        id: "cloud-48",
        question: "What is a snapshot in the context of cloud storage?",
        options: [
            "A real-time copy of running application state",
            "A point-in-time copy of a storage volume's data",
            "A backup of the entire cloud account configuration",
            "A compressed archive of all log files"
        ],
        answer: 1,
        explanation: "A snapshot is a point-in-time copy of a storage volume's data, used for backup, disaster recovery, and creating new volumes from a known good state.",
        difficulty: "Easy",
        topic: "Snapshots"
    },
    {
        id: "cloud-49",
        question: "Which AWS service records API calls made in an AWS account for auditing and compliance?",
        options: [
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config",
            "Amazon Inspector"
        ],
        answer: 1,
        explanation: "AWS CloudTrail records AWS API calls for your account, including calls made through the AWS Management Console, SDKs, CLI, and other AWS services.",
        difficulty: "Easy",
        topic: "CloudTrail"
    },
    {
        id: "cloud-50",
        question: "In Kubernetes, what is the smallest deployable unit of computing?",
        options: [
            "Deployment",
            "Service",
            "Pod",
            "Node"
        ],
        answer: 2,
        explanation: "A Pod is the smallest deployable unit in Kubernetes, representing a single instance of a running process that can contain one or more containers.",
        difficulty: "Easy",
        topic: "Pods"
    },
    {
        id: "cloud-51",
        question: "Which cloud computing benefit allows a small company to access the same enterprise-grade infrastructure as a large corporation?",
        options: [
            "Elasticity",
            "High availability",
            "Economies of scale",
            "Multi-tenancy"
        ],
        answer: 2,
        explanation: "Economies of scale allow cloud providers to offer enterprise-grade infrastructure at affordable prices due to aggregated demand, benefiting organizations of all sizes.",
        difficulty: "Easy",
        topic: "Benefits of Cloud Computing"
    },
    {
        id: "cloud-52",
        question: "What is a common challenge when migrating from on-premises to the cloud?",
        options: [
            "Cloud providers do not offer SLA guarantees",
            "Applications designed for on-premises may have architectural dependencies that don't translate well to cloud",
            "Cloud infrastructure cannot support relational databases",
            "Network latency is always higher in the cloud"
        ],
        answer: 1,
        explanation: "Many on-premises applications have tight coupling to specific hardware, OS configurations, or network architectures that require refactoring to fully leverage cloud capabilities.",
        difficulty: "Easy",
        topic: "Challenges of Cloud Computing"
    },
    {
        id: "cloud-53",
        question: "Which AWS service helps deploy and scale web applications and services without managing underlying infrastructure?",
        options: [
            "AWS CloudFormation",
            "AWS Elastic Beanstalk",
            "AWS OpsWorks",
            "AWS Systems Manager"
        ],
        answer: 1,
        explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services, automatically handling the underlying infrastructure provisioning.",
        difficulty: "Easy",
        topic: "Elastic Beanstalk"
    },
    {
        id: "cloud-54",
        question: "In Docker, what does the COPY instruction do in a Dockerfile?",
        options: [
            "Creates a copy of an existing container",
            "Copies files from the host machine into the Docker image",
            "Clones a git repository into the image",
            "Duplicates a layer from another image"
        ],
        answer: 1,
        explanation: "The COPY instruction copies files or directories from the host machine's filesystem into the Docker image's filesystem at a specified path.",
        difficulty: "Easy",
        topic: "Dockerfile"
    },
    {
        id: "cloud-55",
        question: "Which GCP networking service provides global load balancing with a single anycast IP address?",
        options: [
            "Cloud DNS",
            "Cloud CDN",
            "Global HTTP(S) Load Balancer",
            "Cloud Armor"
        ],
        answer: 2,
        explanation: "GCP's Global HTTP(S) Load Balancer provides global load balancing using a single anycast IP address, automatically routing user traffic to the closest healthy backend.",
        difficulty: "Easy",
        topic: "Load Balancers"
    },
    {
        id: "cloud-56",
        question: "What is the difference between scalability and elasticity?",
        options: [
            "Scalability and elasticity are the same concept",
            "Scalability is the ability to add resources; elasticity automatically adds and removes resources based on demand",
            "Scalability is automatic; elasticity is manual",
            "Elasticity only applies to storage; scalability applies to compute"
        ],
        answer: 1,
        explanation: "Scalability is the ability to handle increased load by adding resources, while elasticity specifically implies the automatic, dynamic addition and removal of resources based on demand.",
        difficulty: "Easy",
        topic: "Scalability"
    },
    {
        id: "cloud-57",
        question: "Which Azure storage type is best suited for storing large amounts of unstructured data like documents, images, and videos?",
        options: [
            "Azure Disk Storage",
            "Azure File Storage",
            "Azure Blob Storage",
            "Azure Queue Storage"
        ],
        answer: 2,
        explanation: "Azure Blob Storage is designed for storing massive amounts of unstructured data such as text, images, videos, and logs, accessible from anywhere via HTTP/HTTPS.",
        difficulty: "Easy",
        topic: "Azure Blob Storage"
    },
    {
        id: "cloud-58",
        question: "What does Infrastructure as Code (IaC) enable?",
        options: [
            "Writing application code that runs directly on bare metal",
            "Managing and provisioning infrastructure through machine-readable configuration files",
            "Converting virtual machines to containers automatically",
            "Generating API documentation from infrastructure configuration"
        ],
        answer: 1,
        explanation: "Infrastructure as Code allows you to define and manage infrastructure using code-based configuration files, enabling version control, repeatability, and automation of deployments.",
        difficulty: "Easy",
        topic: "Infrastructure as Code"
    },
    {
        id: "cloud-59",
        question: "Which AWS service provides a managed pub/sub messaging system for microservices?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon Kinesis",
            "Amazon SES"
        ],
        answer: 1,
        explanation: "Amazon SNS (Simple Notification Service) is a fully managed pub/sub messaging service that enables you to decouple microservices and distributed systems.",
        difficulty: "Easy",
        topic: "SNS"
    },
    {
        id: "cloud-60",
        question: "In Kubernetes, which resource ensures that a specified number of pod replicas are running at all times?",
        options: [
            "Pod",
            "Service",
            "ReplicaSet",
            "ConfigMap"
        ],
        answer: 2,
        explanation: "A ReplicaSet ensures that a specified number of pod replicas are running at any given time, automatically replacing failed or terminated pods.",
        difficulty: "Easy",
        topic: "ReplicaSets"
    },
    {
        id: "cloud-61",
        question: "What is the primary purpose of a reverse proxy in a cloud architecture?",
        options: [
            "To forward client requests to the internet on behalf of internal servers",
            "To accept client requests and distribute them to backend servers",
            "To cache DNS responses for faster resolution",
            "To encrypt traffic between two cloud regions"
        ],
        answer: 1,
        explanation: "A reverse proxy sits in front of backend servers, accepting client requests and distributing them to appropriate servers, providing load balancing, security, and caching benefits.",
        difficulty: "Easy",
        topic: "Reverse Proxy"
    },
    {
        id: "cloud-62",
        question: "Which AWS service is used to send transactional and marketing emails at scale?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon SES",
            "Amazon Pinpoint"
        ],
        answer: 2,
        explanation: "Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable email service designed to send transactional and marketing emails.",
        difficulty: "Easy",
        topic: "SES"
    },
    {
        id: "cloud-63",
        question: "What does 'lift and shift' mean in cloud migration?",
        options: [
            "Moving applications to the cloud without any modifications",
            "Redesigning applications using cloud-native patterns",
            "Replacing on-premises applications with SaaS alternatives",
            "Moving data from one cloud region to another"
        ],
        answer: 0,
        explanation: "Lift and shift (rehosting) involves moving applications to the cloud as-is without significant changes, providing the fastest migration path but not fully leveraging cloud capabilities.",
        difficulty: "Easy",
        topic: "Lift and Shift"
    },
    {
        id: "cloud-64",
        question: "Which type of caching stores frequently accessed data to reduce database load?",
        options: [
            "Write-through cache",
            "Read-through cache",
            "Both read-through and write-through can reduce read load",
            "Cache invalidation"
        ],
        answer: 2,
        explanation: "Both read-through and write-through caching strategies reduce database read load by serving frequently accessed data from the cache layer instead of hitting the database.",
        difficulty: "Easy",
        topic: "Caching"
    },
    {
        id: "cloud-65",
        question: "In AWS, what is the maximum number of Availability Zones per Region?",
        options: [
            "2",
            "3",
            "6",
            "It varies by region"
        ],
        answer: 3,
        explanation: "The number of Availability Zones varies by region, with most regions having 3 AZs, but some larger regions now have up to 6 AZs.",
        difficulty: "Easy",
        topic: "Availability Zones"
    },
    {
        id: "cloud-66",
        question: "Which Kubernetes resource is used to expose a service externally using a load balancer?",
        options: [
            "ClusterIP Service",
            "NodePort Service",
            "LoadBalancer Service",
            "Ingress Resource"
        ],
        answer: 2,
        explanation: "A LoadBalancer Service type provisions an external load balancer (from the cloud provider) to expose the service externally, automatically assigning an IP address.",
        difficulty: "Easy",
        topic: "Services"
    },
    {
        id: "cloud-67",
        question: "What is the purpose of a subnet in a VPC?",
        options: [
            "To connect a VPC to the internet",
            "To partition a VPC's IP address range into smaller network segments",
            "To encrypt traffic between VPC resources",
            "To provide DNS resolution within the VPC"
        ],
        answer: 1,
        explanation: "Subnets partition a VPC's IP address range into smaller segments, allowing you to organize and isolate resources, with public subnets for internet-facing and private subnets for internal resources.",
        difficulty: "Easy",
        topic: "Subnets"
    },
    {
        id: "cloud-68",
        question: "Which Terraform command creates an execution plan showing what changes will be made?",
        options: [
            "terraform apply",
            "terraform plan",
            "terraform init",
            "terraform validate"
        ],
        answer: 1,
        explanation: "The `terraform plan` command creates an execution plan, showing what actions Terraform will take to reach the desired state defined in the configuration files.",
        difficulty: "Easy",
        topic: "Terraform"
    },
    {
        id: "cloud-69",
        question: "What is the primary benefit of using Spot Instances in AWS?",
        options: [
            "They are more reliable than On-Demand instances",
            "They can be stopped and resumed later without data loss",
            "They offer significant cost savings for fault-tolerant workloads",
            "They guarantee uninterrupted execution for any duration"
        ],
        answer: 2,
        explanation: "Spot Instances offer up to 90% cost savings compared to On-Demand pricing but can be interrupted with short notice, making them suitable for fault-tolerant, flexible workloads.",
        difficulty: "Easy",
        topic: "Spot Instances"
    },
    {
        id: "cloud-70",
        question: "Which CI/CD tool is natively integrated with GitHub repositories for automated build and deploy workflows?",
        options: [
            "Jenkins",
            "GitLab CI",
            "GitHub Actions",
            "CircleCI"
        ],
        answer: 2,
        explanation: "GitHub Actions is natively integrated into GitHub repositories, enabling automated workflows for building, testing, and deploying code directly from the GitHub interface.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "cloud-71",
        question: "What is a Kubernetes Deployment primarily used for?",
        options: [
            "Exposing pods to external traffic",
            "Managing storage for pods",
            "Declaratively managing pod replicas and rolling updates",
            "Configuring network policies between pods"
        ],
        answer: 2,
        explanation: "A Kubernetes Deployment provides declarative updates for Pods and ReplicaSets, managing rolling updates, rollbacks, and ensuring the desired number of replicas are running.",
        difficulty: "Easy",
        topic: "Deployments"
    },
    {
        id: "cloud-72",
        question: "Which encryption type protects data while it is being transmitted over a network?",
        options: [
            "Encryption at rest",
            "Encryption in transit",
            "Field-level encryption",
            "Envelope encryption"
        ],
        answer: 1,
        explanation: "Encryption in transit protects data while it is being transmitted over a network using protocols like TLS/SSL, preventing interception by unauthorized parties.",
        difficulty: "Easy",
        topic: "Encryption in Transit"
    },
    {
        id: "cloud-73",
        question: "What is an Azure Resource Manager (ARM) template used for?",
        options: [
            "Managing Azure Active Directory users",
            "Declaratively defining and deploying Azure infrastructure",
            "Monitoring Azure resource metrics",
            "Configuring Azure network routing tables"
        ],
        answer: 1,
        explanation: "ARM templates are JSON files that declaratively define the infrastructure and configuration for Azure deployments, enabling Infrastructure as Code practices in Azure.",
        difficulty: "Easy",
        topic: "CloudFormation"
    },
    {
        id: "cloud-74",
        question: "In a microservices architecture, what is the primary purpose of an API Gateway?",
        options: [
            "To store and retrieve microservice data",
            "To act as a single entry point for client requests, handling routing, composition, and cross-cutting concerns",
            "To monitor individual microservice health",
            "To deploy microservice container images"
        ],
        answer: 1,
        explanation: "An API Gateway serves as a single entry point for all client requests, handling request routing, composition, protocol translation, and cross-cutting concerns like authentication and rate limiting.",
        difficulty: "Easy",
        topic: "API Gateway"
    },
    {
        id: "cloud-75",
        question: "Which AWS service provides a managed, distributed caching layer?",
        options: [
            "Amazon RDS",
            "Amazon ElastiCache",
            "Amazon DynamoDB DAX",
            "Amazon Aurora"
        ],
        answer: 1,
        explanation: "Amazon ElastiCache is a fully managed in-memory caching service supporting Redis and Memcached, used to improve application performance by reducing database load.",
        difficulty: "Easy",
        topic: "Caching"
    },
    {
        id: "cloud-76",
        question: "What is the purpose of a Kubernetes Namespace?",
        options: [
            "To provide network isolation between pods",
            "To logically partition cluster resources between multiple users or teams",
            "To define resource quotas for the entire cluster",
            "To expose pods to external traffic"
        ],
        answer: 1,
        explanation: "Kubernetes Namespaces provide a mechanism to partition cluster resources into logically named groups, enabling multiple teams or projects to share a cluster with resource isolation.",
        difficulty: "Easy",
        topic: "Namespaces"
    },
    {
        id: "cloud-77",
        question: "Which cloud migration strategy involves making minimal changes to optimize the application for the cloud without changing the core architecture?",
        options: [
            "Rehosting (Lift and Shift)",
            "Replatforming (Lift, Tinker, and Shift)",
            "Refactoring / Rearchitecting",
            "Repurchasing (SaaS replacement)"
        ],
        answer: 1,
        explanation: "Replatforming involves making small optimizations like switching to managed databases or using cloud storage without changing the core application architecture.",
        difficulty: "Easy",
        topic: "Replatforming"
    },
    {
        id: "cloud-78",
        question: "What does the principle of least privilege in cloud security recommend?",
        options: [
            "Give all users admin access to simplify operations",
            "Grant only the minimum permissions necessary for users and services to perform their tasks",
            "Use the same IAM policy for all applications",
            "Restrict all access until explicitly needed for each request"
        ],
        answer: 1,
        explanation: "The principle of least privilege recommends granting only the minimum permissions necessary for users, applications, and services to perform their intended functions.",
        difficulty: "Easy",
        topic: "IAM Best Practices"
    },
    {
        id: "cloud-79",
        question: "Which AWS service provides a managed VPN connection between your on-premises network and your VPC?",
        options: [
            "AWS Direct Connect",
            "AWS Site-to-Site VPN",
            "AWS Transit Gateway",
            "VPC Peering"
        ],
        answer: 1,
        explanation: "AWS Site-to-Site VPN creates an IPsec VPN tunnel between your on-premises network and your VPC over the public internet, providing encrypted connectivity.",
        difficulty: "Easy",
        topic: "VPN"
    },
    {
        id: "cloud-80",
        question: "In Docker, which command stops all running containers?",
        options: [
            "docker stop all",
            "docker stop $(docker ps -q)",
            "docker kill --all",
            "docker halt"
        ],
        answer: 1,
        explanation: "`docker stop $(docker ps -q)` uses command substitution to list all running container IDs and pass them to docker stop. Docker does not have a built-in 'stop all' command.",
        difficulty: "Easy",
        topic: "Docker Containers"
    },
    {
        id: "cloud-81",
        question: "What is the difference between high availability and fault tolerance?",
        options: [
            "They are the same concept",
            "High availability minimizes downtime through redundancy; fault tolerance provides continuous operation even during failures",
            "Fault tolerance is less expensive than high availability",
            "High availability eliminates all downtime; fault tolerance just reduces it"
        ],
        answer: 1,
        explanation: "High availability aims to minimize downtime through redundancy and failover, while fault tolerance goes further by ensuring the system continues operating without interruption during failures.",
        difficulty: "Easy",
        topic: "High Availability"
    },
    {
        id: "cloud-82",
        question: "Which GCP service provides IAM for controlling access to GCP resources?",
        options: [
            "Cloud Identity",
            "Cloud IAM",
            "Cloud Resource Manager",
            "Organization Policy"
        ],
        answer: 1,
        explanation: "Cloud IAM is GCP's identity and access management service that lets administrators authorize who can take action on specific resources, providing fine-grained access control.",
        difficulty: "Easy",
        topic: "Cloud IAM"
    },
    {
        id: "cloud-83",
        question: "What is a Docker image?",
        options: [
            "A running instance of a containerized application",
            "A read-only template with instructions for creating a Docker container",
            "A configuration file for Docker Compose",
            "A network bridge for container communication"
        ],
        answer: 1,
        explanation: "A Docker image is a read-only template containing the application code, libraries, dependencies, and instructions needed to create a Docker container.",
        difficulty: "Easy",
        topic: "Docker Images"
    },
    {
        id: "cloud-84",
        question: "Which Azure service provides a managed load balancer for distributing traffic within a VNet?",
        options: [
            "Azure Application Gateway",
            "Azure Front Door",
            "Azure Load Balancer",
            "Azure Traffic Manager"
        ],
        answer: 2,
        explanation: "Azure Load Balancer distributes inbound traffic across multiple backend instances within a VNet, operating at Layer 4 for TCP and UDP traffic distribution.",
        difficulty: "Easy",
        topic: "Azure Load Balancer"
    },
    {
        id: "cloud-85",
        question: "What is the role of AWS CloudFront in a web application architecture?",
        options: [
            "It serves as a compute layer for dynamic content",
            "It caches and delivers content from edge locations to reduce latency",
            "It manages database connections and query optimization",
            "It provides serverless function execution at the edge"
        ],
        answer: 1,
        explanation: "AWS CloudFront is a content delivery network (CDN) that caches content at edge locations worldwide and delivers it to users with low latency and high transfer speeds.",
        difficulty: "Easy",
        topic: "CloudFront"
    },
    {
        id: "cloud-86",
        question: "In Kubernetes, which resource stores non-confidential configuration data as key-value pairs?",
        options: [
            "Secrets",
            "ConfigMaps",
            "PersistentVolumes",
            "ServiceAccounts"
        ],
        answer: 1,
        explanation: "ConfigMaps store non-confidential configuration data as key-value pairs, allowing you to decouple environment-specific configuration from container images.",
        difficulty: "Easy",
        topic: "ConfigMaps"
    },
    {
        id: "cloud-87",
        question: "Which type of database is Amazon DynamoDB?",
        options: [
            "Relational database",
            "Key-value and document NoSQL database",
            "Graph database",
            "Time-series database"
        ],
        answer: 1,
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service that supports both key-value and document data models, offering single-digit millisecond performance at any scale.",
        difficulty: "Easy",
        topic: "DynamoDB"
    },
    {
        id: "cloud-88",
        question: "What is the purpose of a route table in a VPC?",
        options: [
            "To store DNS records for VPC resources",
            "To define rules that determine where network traffic from subnets or gateways is directed",
            "To configure security group rules for instances",
            "To manage internet gateway attachments"
        ],
        answer: 1,
        explanation: "A route table contains a set of rules (routes) that determine where network traffic from subnets or gateways is directed, controlling the network path for VPC resources.",
        difficulty: "Easy",
        topic: "Route Tables"
    },
    {
        id: "cloud-89",
        question: "Which AWS service provides a managed service for running Apache Kafka?",
        options: [
            "Amazon Kinesis",
            "Amazon MQ",
            "Amazon MSK",
            "Amazon SNS"
        ],
        answer: 2,
        explanation: "Amazon Managed Streaming for Apache Kafka (MSK) is a fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data.",
        difficulty: "Easy",
        topic: "AWS Basics"
    },
    {
        id: "cloud-90",
        question: "What does GitOps primarily use as the single source of truth for infrastructure and application configuration?",
        options: [
            "A relational database",
            "Git repositories",
            "A configuration management server",
            "Cloud provider consoles"
        ],
        answer: 1,
        explanation: "GitOps uses Git repositories as the single source of truth for declarative infrastructure and applications, automating deployments through pull-based mechanisms from Git.",
        difficulty: "Easy",
        topic: "GitOps"
    },
    {
        id: "cloud-91",
        question: "Which Azure service provides monitoring and alerting for Azure resources?",
        options: [
            "Azure Network Watcher",
            "Azure Monitor",
            "Azure Security Center",
            "Azure Advisor"
        ],
        answer: 1,
        explanation: "Azure Monitor provides a comprehensive solution for collecting, analyzing, and acting on telemetry from Azure resources, applications, and infrastructure.",
        difficulty: "Easy",
        topic: "Azure Monitor"
    },
    {
        id: "cloud-92",
        question: "In cloud computing, what does multi-tenancy refer to?",
        options: [
            "Running applications across multiple cloud providers",
            "Multiple customers sharing the same physical infrastructure with logical isolation",
            "Having multiple accounts with the same cloud provider",
            "Deploying applications in multiple regions simultaneously"
        ],
        answer: 1,
        explanation: "Multi-tenancy means multiple customers (tenants) share the same physical infrastructure and resources while their data and workloads are logically isolated from each other.",
        difficulty: "Easy",
        topic: "Cloud Fundamentals"
    },
    {
        id: "cloud-93",
        question: "Which AWS service provides a managed container orchestration service for running Kubernetes?",
        options: [
            "Amazon ECS",
            "Amazon EKS",
            "AWS Fargate",
            "AWS App Runner"
        ],
        answer: 1,
        explanation: "Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service that runs the Kubernetes control plane across multiple AWS Availability Zones for high availability.",
        difficulty: "Easy",
        topic: "Kubernetes"
    },
    {
        id: "cloud-94",
        question: "What is the primary use case for Amazon S3 lifecycle policies?",
        options: [
            "To automatically scale S3 buckets based on request volume",
            "To transition objects between storage classes or expire them based on defined rules",
            "To encrypt S3 objects after a specified time period",
            "To replicate S3 objects across regions on a schedule"
        ],
        answer: 1,
        explanation: "S3 lifecycle policies enable you to automatically transition objects between storage classes (e.g., Standard to Glacier) or expire/delete them based on predefined rules.",
        difficulty: "Easy",
        topic: "S3"
    },
    {
        id: "cloud-95",
        question: "In cloud security, what is the purpose of key rotation?",
        options: [
            "To improve encryption performance",
            "To reduce the key length for faster processing",
            "To periodically replace encryption keys to limit exposure if a key is compromised",
            "To share keys between different cloud providers"
        ],
        answer: 2,
        explanation: "Key rotation periodically replaces encryption keys with new ones, limiting the amount of data protected by any single key and reducing the impact of potential key compromise.",
        difficulty: "Easy",
        topic: "Key Management"
    },
    {
        id: "cloud-96",
        question: "Which GCP service provides a fully managed environment for deploying containerized applications on Google Cloud?",
        options: [
            "Cloud Run",
            "Compute Engine",
            "Google Kubernetes Engine",
            "App Engine Flexible"
        ],
        answer: 2,
        explanation: "Google Kubernetes Engine (GKE) provides a fully managed Kubernetes environment for deploying, managing, and scaling containerized applications using Google's infrastructure.",
        difficulty: "Easy",
        topic: "Kubernetes"
    },
    {
        id: "cloud-97",
        question: "What is the difference between a public subnet and a private subnet in a VPC?",
        options: [
            "Public subnets have faster network performance",
            "Public subnets have a route to an Internet Gateway; private subnets do not",
            "Private subnets cannot have any security groups attached",
            "Public subnets are free; private subnets incur additional costs"
        ],
        answer: 1,
        explanation: "The key difference is that a public subnet has a route table entry pointing to an Internet Gateway, allowing resources to have public IP addresses and direct internet access.",
        difficulty: "Easy",
        topic: "Subnets"
    },
    {
        id: "cloud-98",
        question: "Which service in AWS provides managed Git repositories for source code?",
        options: [
            "AWS CodeBuild",
            "AWS CodeCommit",
            "AWS CodePipeline",
            "AWS CodeDeploy"
        ],
        answer: 1,
        explanation: "AWS CodeCommit is a fully managed source control service that hosts secure, highly scalable, private Git repositories for source code and documentation.",
        difficulty: "Easy",
        topic: "CI/CD"
    },
    {
        id: "cloud-99",
        question: "In Kubernetes, which resource is used to store sensitive data like passwords and API keys?",
        options: [
            "ConfigMap",
            "Secret",
            "PersistentVolumeClaim",
            "ServiceAccount"
        ],
        answer: 1,
        explanation: "Kubernetes Secrets are used to store sensitive data such as passwords, OAuth tokens, and SSH keys, providing more control over how sensitive information is used and transmitted.",
        difficulty: "Easy",
        topic: "Secrets"
    },
    {
        id: "cloud-100",
        question: "What is the primary characteristic that distinguishes edge computing from traditional cloud computing?",
        options: [
            "Edge computing uses more powerful servers",
            "Edge computing processes data closer to the source of data generation rather than in centralized data centers",
            "Edge computing eliminates the need for cloud services",
            "Edge computing only works with IoT devices"
        ],
        answer: 1,
        explanation: "Edge computing processes data near the source of data generation (at the edge of the network) rather than sending it to centralized cloud data centers, reducing latency and bandwidth usage.",
        difficulty: "Easy",
        topic: "Edge Computing"
    },
    {
        id: "cloud-101",
        question: "An application running on EC2 experiences intermittent connection timeouts to an RDS database. Both are in the same VPC but different subnets. The EC2 instance is in a private subnet with a NAT Gateway. What is the most likely cause?",
        options: [
            "The NAT Gateway is throttling the connection",
            "The security group on the RDS instance does not allow outbound traffic from the EC2 instance's security group",
            "The route table for the EC2 subnet is missing a route to the RDS subnet",
            "The RDS instance is in a public subnet and cannot be accessed from private subnets"
        ],
        answer: 1,
        explanation: "Since both resources are in the same VPC, communication happens through private IP addresses. The NAT Gateway is only needed for internet-bound traffic. The most likely issue is a missing security group rule allowing inbound traffic from the EC2 security group to the RDS instance on the database port.",
        difficulty: "Medium",
        topic: "Troubleshooting"
    },
    {
        id: "cloud-102",
        question: "A Kubernetes cluster has a Deployment with 3 replicas. After updating the container image, you notice that the old and new pods are running simultaneously. Which update strategy is being used?",
        options: [
            "Recreate",
            "Rolling Update",
            "Blue-Green",
            "Canary"
        ],
        answer: 1,
        explanation: "Rolling Update (the default Kubernetes strategy) gradually replaces old pods with new ones, ensuring some instances of both versions run simultaneously during the update process.",
        difficulty: "Medium",
        topic: "Deployments"
    },
    {
        id: "cloud-103",
        question: "A company needs to store sensitive configuration data in Kubernetes. They want the data encrypted at rest and only accessible by specific pods. Which approach is most appropriate?",
        options: [
            "Store data in a ConfigMap and restrict access with RBAC",
            "Store data in a Secret with encryption at rest enabled and use RBAC to restrict access",
            "Store data as environment variables directly in the Deployment YAML",
            "Store data in a PersistentVolume with encryption"
        ],
        answer: 1,
        explanation: "Kubernetes Secrets are designed for sensitive data, can be encrypted at rest using an encryption provider, and RBAC can restrict which pods or service accounts can access specific secrets.",
        difficulty: "Medium",
        topic: "Secrets"
    },
    {
        id: "cloud-104",
        question: "Your Terraform state file is stored locally. Your team of five engineers needs to collaborate on the same infrastructure. What problem will you encounter?",
        options: [
            "Terraform will fail to authenticate with the cloud provider",
            "State file lock conflicts and overwrites when multiple people run Terraform simultaneously",
            "Terraform will create duplicate resources for each team member",
            "The state file will become corrupted after multiple reads"
        ],
        answer: 1,
        explanation: "Local state files cause collaboration issues because Terraform cannot coordinate locks across multiple users, leading to race conditions, conflicting state updates, and potential infrastructure inconsistencies.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-105",
        question: "An S3 bucket policy allows public read access. However, external users are getting Access Denied errors when trying to access objects. What is the most likely cause?",
        options: [
            "S3 does not support public access",
            "The bucket has Block Public Access settings enabled at the account or bucket level",
            "The objects have individual ACLs that override the bucket policy",
            "S3 requires a CDN for public access"
        ],
        answer: 1,
        explanation: "AWS S3 Block Public Access settings at the account or bucket level override bucket policies and ACLs. Even if the bucket policy allows public read, Block Public Access will deny the requests.",
        difficulty: "Medium",
        topic: "S3"
    },
    {
        id: "cloud-106",
        question: "A microservices application has 15 services that need to communicate with each other. Which pattern best prevents tight coupling and service mesh complexity for this scale?",
        options: [
            "Direct REST calls between all services",
            "Implementing an API Gateway with service-to-service communication through a message broker for asynchronous flows",
            "Using shared databases for all services to communicate",
            "Hardcoding service URLs in each service's configuration"
        ],
        answer: 1,
        explanation: "An API Gateway handles external routing and cross-cutting concerns, while a message broker decouples synchronous dependencies for asynchronous communication, providing a balanced approach for 15 services.",
        difficulty: "Medium",
        topic: "Microservices"
    },
    {
        id: "cloud-107",
        question: "You need to deploy a stateful application on Kubernetes that requires stable network identity and persistent storage. Which resources should you combine?",
        options: [
            "Deployment + ConfigMap + EmptyDir",
            "StatefulSet + Headless Service + PersistentVolumeClaim",
            "ReplicaSet + ClusterIP Service + HostPath",
            "DaemonSet + NodePort Service + NFS"
        ],
        answer: 1,
        explanation: "StatefulSets provide stable, unique network identities and ordered deployment. Combined with a Headless Service for stable DNS entries and PVCs for persistent storage, this is the correct pattern for stateful applications.",
        difficulty: "Medium",
        topic: "Persistent Volumes"
    },
    {
        id: "cloud-108",
        question: "An Auto Scaling group is configured to scale based on CPU utilization at 70% threshold. However, the group keeps scaling in and out rapidly every few minutes. What is the most effective solution?",
        options: [
            "Increase the cooldown period and add target tracking instead of step scaling",
            "Change the threshold to 50%",
            "Increase the maximum instance count",
            "Switch to scheduled scaling"
        ],
        answer: 0,
        explanation: "Rapid scaling oscillation (thrashing) is best addressed by increasing the cooldown period to allow metrics to stabilize and switching to target tracking which has built-in warm-up and stabilization logic.",
        difficulty: "Medium",
        topic: "Autoscaling Strategies"
    },
    {
        id: "cloud-109",
        question: "A Docker container exits immediately after starting with code 0. The Dockerfile has a CMD instruction that runs a shell script. What is the most likely reason?",
        options: [
            "The container ran out of memory",
            "The shell script completed successfully and the container had no foreground process to keep it running",
            "The base image is incompatible with the host kernel",
            "The CMD instruction has a syntax error"
        ],
        answer: 1,
        explanation: "Exit code 0 means successful completion. If the CMD script finishes execution without leaving a foreground process running, the container stops because containers need a running process to stay alive.",
        difficulty: "Medium",
        topic: "Docker Containers"
    },
    {
        id: "cloud-110",
        question: "You need to route traffic based on the URL path: /api/* to backend service A and /* to backend service B. Which AWS service is most appropriate?",
        options: [
            "Network Load Balancer with target groups",
            "Application Load Balancer with path-based routing",
            "Amazon API Gateway with integration types",
            "Route 53 with latency-based routing"
        ],
        answer: 1,
        explanation: "Application Load Balancer supports path-based routing at Layer 7, allowing you to route requests to different target groups based on the URL path in the request.",
        difficulty: "Medium",
        topic: "Elastic Load Balancer"
    },
    {
        id: "cloud-111",
        question: "A Kubernetes Service of type ClusterIP is created but pods in another namespace cannot resolve the service DNS. What is the most likely cause?",
        options: [
            "ClusterIP services are not accessible across namespaces",
            "The DNS query is using the wrong format; it should be service-name.namespace.svc.cluster.local",
            "The Service has no endpoints because no pods match its selector",
            "Cross-namespace communication requires a Network Policy"
        ],
        answer: 1,
        explanation: "ClusterIP services are accessible across namespaces, but the full DNS name must include the namespace: service-name.namespace.svc.cluster.local. Using just the service name only works within the same namespace.",
        difficulty: "Medium",
        topic: "Services"
    },
    {
        id: "cloud-112",
        question: "An organization wants to ensure that all S3 buckets in their AWS account have server-side encryption enabled. Which service can enforce this automatically?",
        options: [
            "AWS Shield",
            "AWS Config with a custom rule",
            "AWS WAF",
            "Amazon Inspector"
        ],
        answer: 1,
        explanation: "AWS Config can create custom rules that check whether S3 buckets have server-side encryption enabled and can trigger automatic remediation actions like enabling encryption on non-compliant buckets.",
        difficulty: "Medium",
        topic: "Cloud Compliance"
    },
    {
        id: "cloud-113",
        question: "A Terraform configuration creates 10 resources. After applying, you realize one resource needs to be removed. If you delete it from the configuration and run terraform apply, what happens?",
        options: [
            "Terraform will delete only the removed resource",
            "Terraform will destroy and recreate all 10 resources",
            "Terraform will refuse to apply unless you run terraform destroy first",
            "Terraform will prompt you to confirm deletion of all resources"
        ],
        answer: 0,
        explanation: "Terraform performs a plan to detect differences between the configuration and state. It will only destroy the removed resource while leaving the other 9 unchanged, as long as no other changes are detected.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-114",
        question: "An application requires sub-millisecond latency for reads and can tolerate eventual consistency. Which AWS service best fits this requirement?",
        options: [
            "Amazon RDS with read replicas",
            "Amazon DynamoDB with DAX",
            "Amazon Aurora",
            "Amazon ElastiCache for Redis"
        ],
        answer: 1,
        explanation: "DynamoDB Accelerator (DAX) provides microsecond to sub-millisecond latency for DynamoDB reads by acting as an in-memory cache, and eventual consistency is acceptable for cached data.",
        difficulty: "Medium",
        topic: "DynamoDB"
    },
    {
        id: "cloud-115",
        question: "You are designing a disaster recovery strategy with an RPO of 15 minutes and RTO of 1 hour for a multi-tier web application. Which approach is most cost-effective?",
        options: [
            "Multi-Region active-active deployment",
            "Pilot light with continuous replication and pre-provisioned core infrastructure in DR region",
            "Backup and restore with daily snapshots",
            "Cold standby with manual provisioning in DR region"
        ],
        answer: 1,
        explanation: "A pilot light approach maintains a minimal version of the environment in the DR region with continuous data replication, meeting the 15-minute RPO while keeping costs lower than active-active, and the pre-provisioned core helps meet the 1-hour RTO.",
        difficulty: "Medium",
        topic: "Disaster Recovery"
    },
    {
        id: "cloud-116",
        question: "A Jenkins pipeline fails during the 'docker build' stage with 'Cannot connect to the Docker daemon'. The Jenkins agent is running on an EC2 instance. What is the most likely cause?",
        options: [
            "The Docker image is too large",
            "The Jenkins user does not have permission to access the Docker socket",
            "The EC2 instance does not have enough CPU",
            "The Dockerfile has an invalid FROM instruction"
        ],
        answer: 1,
        explanation: "The 'Cannot connect to Docker daemon' error typically means the Jenkins process user doesn't have permissions to access the Docker socket (/var/run/docker.sock), which is required to run Docker commands.",
        difficulty: "Medium",
        topic: "Jenkins"
    },
    {
        id: "cloud-117",
        question: "Which Azure networking feature allows you to filter network traffic between subnets within a VNet using Layer 3/Layer 4 rules?",
        options: [
            "Network Security Groups",
            "Application Security Groups",
            "Azure Firewall",
            "Both Network Security Groups and Azure Firewall can do this"
        ],
        answer: 3,
        explanation: "Both NSGs and Azure Firewall can filter L3/L4 traffic between subnets. NSGs are distributed and applied directly to subnets/NICs, while Azure Firewall is a centralized, managed firewall with additional features.",
        difficulty: "Medium",
        topic: "Cloud Networking"
    },
    {
        id: "cloud-118",
        question: "A Kubernetes cluster has pods running but they cannot resolve external domain names. Internal service DNS works fine. What should you check first?",
        options: [
            "The Ingress controller configuration",
            "The CoreDNS pod logs and the kube-dns ConfigMap",
            "The Calico network policy configuration",
            "The etcd cluster health"
        ],
        answer: 1,
        explanation: "Since internal DNS works but external DNS fails, the issue is likely with CoreDNS's upstream DNS resolution. Checking CoreDNS pod logs and the forward policy in the CoreDNS ConfigMap is the first diagnostic step.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "cloud-119",
        question: "An AWS account has an EBS volume that contains critical data. The volume was accidentally deleted. What is the best prevention mechanism to implement?",
        options: [
            "Enable versioning on the EBS volume",
            "Enable EBS volume termination protection and create regular snapshots",
            "Use S3 instead of EBS for all data",
            "Enable MFA Delete on the EBS volume"
        ],
        answer: 1,
        explanation: "EBS termination protection prevents accidental deletion of volumes, and regular snapshots provide backup recovery. EBS doesn't support versioning or MFA Delete like S3.",
        difficulty: "Medium",
        topic: "EBS"
    },
    {
        id: "cloud-120",
        question: "In a CI/CD pipeline, you want to ensure that Docker images are only deployed if they pass security vulnerability scans. Where in the pipeline should this check be placed?",
        options: [
            "After deployment to production",
            "Before pushing the image to the container registry",
            "Only during the initial commit stage",
            "As a manual step outside the pipeline"
        ],
        answer: 1,
        explanation: "Security scanning should occur before pushing images to the registry to prevent vulnerable images from ever entering the artifact repository, following the shift-left security principle.",
        difficulty: "Medium",
        topic: "CI/CD"
    },
    {
        id: "cloud-121",
        question: "A GCP Compute Engine instance needs to access a Cloud Storage bucket without using service account keys. Which authentication method should you use?",
        options: [
            "OAuth2 client credentials",
            "Compute Engine default service account with appropriate IAM roles",
            "API keys stored in metadata",
            "Shared VPC with service account impersonation"
        ],
        answer: 1,
        explanation: "Compute Engine instances automatically have access to a default service account. By granting appropriate IAM roles to this service account, the instance can access GCP services without managing keys.",
        difficulty: "Medium",
        topic: "Cloud IAM"
    },
    {
        id: "cloud-122",
        question: "You need to deploy a Helm chart with values that differ between development and production environments. What is the best practice?",
        options: [
            "Maintain separate copies of the Helm chart for each environment",
            "Use the same values.yaml and modify it before each deployment",
            "Create environment-specific values files (e.g., values-dev.yaml, values-prod.yaml) and override using -f flag",
            "Use ConfigMaps to override Helm values at runtime"
        ],
        answer: 2,
        explanation: "Helm supports multiple values files with the -f flag, where later files override earlier ones. This keeps the chart template unchanged while allowing environment-specific customization.",
        difficulty: "Medium",
        topic: "Helm"
    },
    {
        id: "cloud-123",
        question: "An AWS VPC has a public subnet with an EC2 instance that has a public IP but no internet connectivity. The route table has a 0.0.0.0/0 route to an Internet Gateway. What should you check next?",
        options: [
            "The Internet Gateway needs to be restarted",
            "The security group outbound rules may be blocking all traffic",
            "The instance needs to be in a private subnet",
            "The VPC CIDR block is incorrect"
        ],
        answer: 1,
        explanation: "With the route table correctly configured, the most common cause of no internet access from a public subnet instance is the security group blocking outbound traffic. By default, security groups allow all outbound, but this may have been modified.",
        difficulty: "Medium",
        topic: "VPC"
    },
    {
        id: "cloud-124",
        question: "A Docker Compose file defines two services: a web app and a database. The web app fails to connect to the database at 'localhost:5432'. What is the fix?",
        options: [
            "Map the database port to the host using 'ports' directive",
            "Change the connection string to use the service name 'db' (or whatever the database service is named) instead of 'localhost'",
            "Add 'network_mode: host' to both services",
            "Use 'depends_on' to ensure the database starts first"
        ],
        answer: 1,
        explanation: "In Docker Compose, each service runs in its own container with its own network namespace. 'localhost' refers to the container itself, not other containers. Services should connect using the service name as the hostname.",
        difficulty: "Medium",
        topic: "Docker Compose"
    },
    {
        id: "cloud-125",
        question: "Which AWS service provides a dedicated network connection between your on-premises data center and AWS, bypassing the public internet?",
        options: [
            "AWS Site-to-Site VPN",
            "AWS Direct Connect",
            "AWS Transit Gateway",
            "AWS PrivateLink"
        ],
        answer: 1,
        explanation: "AWS Direct Connect establishes a dedicated, private network connection between your on-premises data center and AWS, providing more consistent network performance than internet-based VPN connections.",
        difficulty: "Medium",
        topic: "Direct Connect"
    },
    {
        id: "cloud-126",
        question: "A Kubernetes admin notices that pods are being evicted from nodes with the message 'Insufficient cpu'. However, the cluster has other nodes with available CPU. What is likely misconfigured?",
        options: [
            "The Cluster Autoscaler is not installed",
            "The Pod Disruption Budget is preventing node drainage",
            "The pod's resource requests may not match actual usage, and the scheduler cannot reschedule due to node affinity or anti-affinity rules",
            "The kubelet is not reporting correct metrics"
        ],
        answer: 2,
        explanation: "Even if other nodes have available CPU, pod scheduling constraints like node affinity, pod anti-affinity, or taint/tolerations can prevent the scheduler from placing evicted pods on those nodes.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-127",
        question: "You need to migrate a PostgreSQL database from on-premises to AWS with minimal downtime. Which service and migration approach is most appropriate?",
        options: [
            "Amazon RDS with a manual dump and restore during a maintenance window",
            "Amazon RDS with AWS DMS using CDC (Change Data Capture) for ongoing replication before cutover",
            "Amazon DynamoDB with a full data transformation",
            "Amazon Aurora with a snapshot import"
        ],
        answer: 1,
        explanation: "AWS Database Migration Service (DMS) with CDC captures ongoing changes during migration, allowing you to synchronize data and cutover with minimal downtime compared to a dump/restore approach.",
        difficulty: "Medium",
        topic: "Cloud Migration"
    },
    {
        id: "cloud-128",
        question: "An Azure App Service plan is configured with autoscaling based on CPU percentage. The scale-out operation takes 5-10 minutes to complete, causing performance degradation during spikes. What is the best mitigation?",
        options: [
            "Switch to manual scaling",
            "Use a larger instance size to handle baseline load and adjust the scale-out threshold lower with a shorter evaluation period",
            "Disable autoscaling and use a fixed instance count",
            "Move to Azure Functions"
        ],
        answer: 1,
        explanation: "Using a larger instance size handles baseline load better, while a lower scale-out threshold with shorter evaluation period triggers scaling earlier, giving more time for new instances to be ready before performance degrades.",
        difficulty: "Medium",
        topic: "Autoscaling Strategies"
    },
    {
        id: "cloud-129",
        question: "In Terraform, what is the purpose of the 'depends_on' meta-argument?",
        options: [
            "To create explicit resource dependencies when Terraform cannot automatically infer them",
            "To specify which modules to include in the configuration",
            "To define the order of variable evaluation",
            "To link outputs between different Terraform states"
        ],
        answer: 0,
        explanation: "The depends_on argument is used for explicit dependency declaration when implicit dependencies (via references like resource.attribute) are not possible, such as when a resource depends on the creation of another resource without referencing its attributes.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-130",
        question: "A company uses AWS Organizations with multiple OUs. They want to ensure that no S3 bucket in any member account can be made public. What should they use?",
        options: [
            "IAM policy on each account",
            "Service Control Policy (SCP) to deny S3 public access actions",
            "AWS Config rule in each account",
            "S3 bucket policies on every bucket"
        ],
        answer: 1,
        explanation: "SCPs are organization-level policies that restrict what actions member accounts can perform. An SCP denying s3:PutBucketPolicy and s3:PutObjectAcl for public access would enforce this across all accounts.",
        difficulty: "Medium",
        topic: "Cloud Governance"
    },
    {
        id: "cloud-131",
        question: "A Kubernetes Ingress controller is returning 502 Bad Gateway errors for a specific path. The backend Service and Pods are running correctly. What is the most likely cause?",
        options: [
            "The Ingress resource is missing the 'kubernetes.io/ingress.class' annotation",
            "The Service's selector does not match any pod labels, resulting in no endpoints",
            "The Ingress path regex does not match the incoming request URL",
            "The backend Service port in the Ingress spec does not match the actual Service port"
        ],
        answer: 3,
        explanation: "A 502 error from the Ingress controller means it cannot reach the backend. If the Service and Pods are healthy, the most likely cause is a port mismatch in the Ingress spec where the defined backend port differs from the Service's actual port.",
        difficulty: "Medium",
        topic: "Ingress"
    },
    {
        id: "cloud-132",
        question: "Which Azure service provides a fully managed, globally distributed, multi-model database with automatic indexing?",
        options: [
            "Azure SQL Database",
            "Azure Cosmos DB",
            "Azure Database for PostgreSQL",
            "Azure Cache for Redis"
        ],
        answer: 1,
        explanation: "Azure Cosmos DB is a globally distributed, multi-model database service that offers automatic indexing, guaranteed low latency, and configurable consistency levels across regions.",
        difficulty: "Medium",
        topic: "Cloud Databases"
    },
    {
        id: "cloud-133",
        question: "An application generates 500GB of log data daily that needs to be analyzed for security anomalies. The analysis runs weekly. Which AWS storage solution is most cost-effective?",
        options: [
            "Amazon EBS with weekly snapshots",
            "Amazon S3 with lifecycle policy to move data to Glacier after 7 days",
            "Amazon RDS with a dedicated log table",
            "Amazon EFS with lifecycle management"
        ],
        answer: 1,
        explanation: "S3 Standard is suitable for the first 7 days when analysis runs, and a lifecycle policy automatically moves older data to Glacier for archival at significantly lower cost, matching the access pattern.",
        difficulty: "Medium",
        topic: "Cloud Cost Optimization"
    },
    {
        id: "cloud-134",
        question: "A Docker image build is slow because the same dependency installation step runs every time, even when dependencies haven't changed. How do you optimize this?",
        options: [
            "Use a larger base image",
            "Copy only the dependency files (e.g., package.json) first, install dependencies, then copy the rest of the source code",
            "Use docker build --no-cache",
            "Add more CPU to the build machine"
        ],
        answer: 1,
        explanation: "By copying only dependency manifests first and running install before copying source code, Docker can cache the dependency layer. Source code changes won't invalidate the dependency layer, dramatically speeding up builds.",
        difficulty: "Medium",
        topic: "Dockerfile"
    },
    {
        id: "cloud-135",
        question: "You are designing a multi-region AWS architecture. Which service allows you to route users to the nearest region based on latency?",
        options: [
            "Application Load Balancer",
            "Route 53 latency-based routing",
            "CloudFront with custom origins",
            "Global Accelerator"
        ],
        answer: 1,
        explanation: "Route 53 latency-based routing routes users to the AWS region that provides the lowest latency based on historical network measurements, optimizing user experience across regions.",
        difficulty: "Medium",
        topic: "Traffic Routing"
    },
    {
        id: "cloud-136",
        question: "A Kubernetes cluster runs a CronJob that occasionally fails to complete within its scheduled interval, causing overlapping executions. How do you prevent this?",
        options: [
            "Increase the CronJob's CPU and memory limits",
            "Set 'concurrencyPolicy: Forbid' in the CronJob spec",
            "Add a sleep command at the beginning of the job",
            "Use a Deployment instead of a CronJob"
        ],
        answer: 1,
        explanation: "Setting concurrencyPolicy to 'Forbid' prevents concurrent job executions. If a previous job hasn't completed when the next schedule triggers, the new job is skipped entirely.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-137",
        question: "An organization wants to implement zero-trust networking in their AWS VPC. Which combination of services best supports this model?",
        options: [
            "Security Groups with allow-all outbound rules and restrictive inbound rules",
            "Network ACLs with deny-all default rules and explicit allow rules for each communication path",
            "VPC Flow Logs for monitoring and Security Groups with least-privilege rules",
            "Internet Gateway with strict route table configurations"
        ],
        answer: 2,
        explanation: "Zero-trust requires least-privilege access controls and comprehensive monitoring. Security Groups with minimal rules combined with VPC Flow Logs for detecting unauthorized communication attempts supports this model.",
        difficulty: "Medium",
        topic: "Cloud Security"
    },
    {
        id: "cloud-138",
        question: "A GCP Cloud Functions deployment fails with a timeout error. The function is supposed to process a large CSV file from Cloud Storage. What is the best approach to fix this?",
        options: [
            "Increase the function's memory allocation to maximum",
            "Switch to Cloud Run which has longer timeout limits and can handle larger processing tasks",
            "Split the CSV into smaller files and trigger multiple function invocations",
            "Both switching to Cloud Run and splitting the file are valid approaches depending on the use case"
        ],
        answer: 3,
        explanation: "Cloud Functions has a maximum timeout of 9 minutes (first-gen) or 60 minutes (2nd gen). For large file processing, both switching to Cloud Run (which has no maximum timeout) and splitting files into smaller chunks are valid strategies.",
        difficulty: "Medium",
        topic: "Google Cloud Functions"
    },
    {
        id: "cloud-139",
        question: "In AWS CloudFormation, what happens when you attempt to update a stack and one resource fails to update?",
        options: [
            "Only the failed resource is rolled back; successfully updated resources remain",
            "By default, the entire stack update is rolled back to the previous state",
            "The stack enters a suspended state waiting for manual intervention",
            "CloudFormation continues updating remaining resources and reports the failure at the end"
        ],
        answer: 1,
        explanation: "By default, CloudFormation uses rollback on failure, meaning if any resource in the stack update fails, all successfully updated resources are rolled back to maintain stack consistency.",
        difficulty: "Medium",
        topic: "CloudFormation"
    },
    {
        id: "cloud-140",
        question: "An application deployed on EKS experiences high latency during peak hours. CloudWatch shows CPU utilization is under 40%. What should you investigate next?",
        options: [
            "Increase the number of pod replicas",
            "Check network throughput, I/O wait, and application-level metrics like connection pool saturation or thread blocking",
            "Upgrade to a larger EC2 instance type",
            "Migrate to Fargate"
        ],
        answer: 1,
        explanation: "Low CPU but high latency suggests the bottleneck is not compute. Network I/O, disk I/O, application-level issues like connection pool exhaustion, garbage collection pauses, or thread contention should be investigated.",
        difficulty: "Medium",
        topic: "Monitoring"
    },
    {
        id: "cloud-141",
        question: "Which AWS feature allows an EC2 instance to assume an IAM role temporarily without storing long-term credentials on the instance?",
        options: [
            "IAM user access keys stored in environment variables",
            "IAM instance profile that provides temporary credentials via the instance metadata service",
            "STS AssumeRole with hardcoded credentials",
            "AWS Secrets Manager integration"
        ],
        answer: 1,
        explanation: "An IAM instance profile attaches an IAM role to an EC2 instance. The instance can then obtain temporary security credentials via the instance metadata service, eliminating the need to store long-term credentials.",
        difficulty: "Medium",
        topic: "IAM"
    },
    {
        id: "cloud-142",
        question: "A Helm release is stuck in 'pending-install' state. Helm history shows the release but 'helm list' shows it as pending. What is the safest way to recover?",
        options: [
            "Delete the release namespace and reinstall",
            "Use 'helm rollback' to revert to a previous version",
            "Use 'helm uninstall' with --keep-history flag, then reinstall",
            "Manually delete the release secrets from Kubernetes and run 'helm install' again"
        ],
        answer: 2,
        explanation: "Using 'helm uninstall --keep-history' safely cleans up the pending release resources while preserving the history. You can then reinstall cleanly without orphaned resources or corrupted state.",
        difficulty: "Medium",
        topic: "Helm"
    },
    {
        id: "cloud-143",
        question: "An Azure Virtual Network has two subnets: Subnet-A (10.0.1.0/24) and Subnet-B (10.0.2.0/24). A VM in Subnet-A cannot ping a VM in Subnet-B. Both have NSGs allowing all inbound and outbound traffic. What is the most likely cause?",
        options: [
            "NSGs do not allow ICMP by default even with 'allow all' rules",
            "The VMs need to be in the same subnet to communicate",
            "Azure does not support inter-subnet communication without a load balancer",
            "The VNet peering is not configured"
        ],
        answer: 0,
        explanation: "Azure NSG rules with 'Any' protocol technically allow ICMP, but the VM's OS firewall (not NSG) often blocks ICMP/ping by default. Additionally, Azure's default NSG rules do include allow rules for intra-VNet traffic, so the issue is likely at the OS level.",
        difficulty: "Medium",
        topic: "Azure Virtual Network"
    },
    {
        id: "cloud-144",
        question: "You are implementing a blue-green deployment strategy on Kubernetes. Which approach correctly achieves this with zero downtime?",
        options: [
            "Update the Deployment's image and let rolling update handle it",
            "Create a new Deployment with the new version, shift traffic using a Service selector update once all new pods are ready",
            "Delete all old pods and create new ones",
            "Use a ReplicaSet to manage both versions simultaneously"
        ],
        answer: 1,
        explanation: "True blue-green on Kubernetes requires two Deployments (blue and green) running simultaneously. Once the green deployment is fully ready, the Service selector is updated to point to the new pods, achieving instant traffic shift.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-145",
        question: "A company's AWS bill shows unexpectedly high data transfer costs. Analysis reveals significant cross-AZ data transfer within the same region. What architectural change would most reduce this cost?",
        options: [
            "Enable S3 Transfer Acceleration",
            "Consolidate resources into fewer AZs where possible and use VPC endpoints for AWS service traffic",
            "Switch to Spot Instances",
            "Use AWS PrivateLink for all inter-AZ communication"
        ],
        answer: 1,
        explanation: "Cross-AZ data transfer incurs costs. Consolidating resources into fewer AZs reduces cross-AZ traffic, and VPC endpoints keep traffic to AWS services within the VPC, avoiding internet and cross-AZ charges.",
        difficulty: "Medium",
        topic: "Cloud Cost Optimization"
    },
    {
        id: "cloud-146",
        question: "In Ansible, what is the difference between a 'task' and a 'handler'?",
        options: [
            "Tasks run on remote hosts; handlers run on the control node",
            "Tasks execute unconditionally during playbook execution; handlers only execute when notified by a task that reports a change",
            "Tasks are for configuration; handlers are for monitoring",
            "There is no difference; they are interchangeable"
        ],
        answer: 1,
        explanation: "Handlers are special tasks that only run when notified by another task that has made a change, typically used for service restarts after configuration changes to avoid unnecessary restarts.",
        difficulty: "Medium",
        topic: "Ansible"
    },
    {
        id: "cloud-147",
        question: "A GCP organization wants to prevent projects from creating external IP addresses on Compute Engine instances. Which tool enforces this at the organization level?",
        options: [
            "IAM custom role removing compute.addresses.create permission",
            "Organization Policy constraint compute.vmExternalIpAccess",
            "VPC Service Controls",
            "Firewall rule denying all external traffic"
        ],
        answer: 1,
        explanation: "GCP Organization Policies provide guardrails at the organization, folder, or project level. The compute.vmExternalIpAccess constraint specifically controls whether VMs can have external IP addresses.",
        difficulty: "Medium",
        topic: "Cloud Governance"
    },
    {
        id: "cloud-148",
        question: "An application uses AWS Lambda with an API Gateway. The Lambda function intermittently times out at 30 seconds, but the API Gateway timeout is set to 29 seconds. What will the client experience?",
        options: [
            "The client will receive a 200 response with partial data",
            "The client will receive a 504 Gateway Timeout from API Gateway before Lambda finishes",
            "The client will wait for Lambda to complete and receive the full response",
            "The client will receive a 500 Internal Server Error"
        ],
        answer: 1,
        explanation: "API Gateway's integration timeout (max 29 seconds for REST APIs) will trigger before Lambda's 30-second timeout. API Gateway returns a 504 Gateway Timeout to the client when the backend doesn't respond within the configured timeout.",
        difficulty: "Medium",
        topic: "AWS Lambda"
    },
    {
        id: "cloud-149",
        question: "Which Kubernetes admission controller would you use to ensure all pods have resource limits and requests defined?",
        options: [
            "LimitRanger",
            "ResourceQuota",
            "ValidatingAdmissionWebhook with a custom policy",
            "PodSecurityPolicy"
        ],
        answer: 2,
        explanation: "While LimitRanger can apply default limits, a ValidatingAdmissionWebhook (or tools like OPA Gatekeeper/Kyverno built on it) can enforce that resource limits and requests are explicitly defined rather than just applying defaults.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-150",
        question: "A Docker container needs to access the host's network directly, including listening on the host's ports. Which run option achieves this?",
        options: [
            "docker run --network bridge",
            "docker run --network host",
            "docker run --network none",
            "docker run -p 80:80"
        ],
        answer: 1,
        explanation: "The --network host option disables network isolation, giving the container direct access to the host's network stack. The container shares the host's network namespace and can bind directly to host ports.",
        difficulty: "Medium",
        topic: "Docker Containers"
    },
    {
        id: "cloud-151",
        question: "An AWS CloudWatch alarm is configured to trigger an SNS notification when CPU exceeds 80% for 2 consecutive periods of 5 minutes. How long must CPU stay above 80% before the alarm fires?",
        options: [
            "5 minutes",
            "10 minutes",
            "2 minutes",
            "80% of any time period"
        ],
        answer: 1,
        explanation: "Two consecutive periods of 5 minutes each means the CPU must exceed 80% for 10 minutes total (2 x 5 minutes) before the alarm state changes to ALARM and the SNS notification is sent.",
        difficulty: "Medium",
        topic: "CloudWatch"
    },
    {
        id: "cloud-152",
        question: "You need to share an S3 bucket with another AWS account while maintaining control over what the external account can do. Which approach provides the most granular control?",
        options: [
            "Make the bucket public and rely on the external account's IAM policies",
            "Use a bucket policy that specifies the external account ID and specific allowed actions",
            "Share the AWS access keys of the bucket owner",
            "Use ACLs to grant READ access to the external account"
        ],
        answer: 1,
        explanation: "A bucket policy can specify the exact external account ID and enumerate precisely which S3 actions are allowed, providing the most granular cross-account access control without sharing credentials.",
        difficulty: "Medium",
        topic: "S3"
    },
    {
        id: "cloud-153",
        question: "A Kubernetes PersistentVolume is in 'Released' state after the claiming Pod was deleted. Can a new PVC claim this PV?",
        options: [
            "Yes, automatically",
            "No, the PV must be manually recycled or deleted and recreated",
            "Yes, but only if the reclaim policy is set to Retain",
            "Only if the new PVC has the exact same name"
        ],
        answer: 1,
        explanation: "When a PVC is deleted, the PV enters 'Released' state. With the default Retain policy, the PV retains its data but cannot be claimed again until manually cleaned up. The Recycle policy (deprecated) or dynamic provisioning should be used for automatic reuse.",
        difficulty: "Medium",
        topic: "Persistent Volumes"
    },
    {
        id: "cloud-154",
        question: "An Azure Function App uses a Consumption plan. The function processes messages from a Service Bus queue. What triggers the function to scale out?",
        options: [
            "CPU utilization of the underlying VM",
            "The number of unprocessed messages in the Service Bus queue",
            "Memory utilization exceeding 80%",
            "A manual scale-out configuration"
        ],
        answer: 1,
        explanation: "On the Consumption plan, Azure Functions automatically scales based on the trigger type. For Service Bus queues, it scales out based on the number of active messages and the queue length.",
        difficulty: "Medium",
        topic: "Azure Functions"
    },
    {
        id: "cloud-155",
        question: "A Terraform module is published to a private registry. How do you reference it in another configuration?",
        options: [
            "module \"name\" { source = \"git::https://registry.example.com/module\"",
            "module \"name\" { source = \"registry.example.com/org/module/version\"",
            "module \"name\" { source = \"./modules/module\" }",
            "module \"name\" { source = \"https://registry.example.com/org/module\" }"
        ],
        answer: 1,
        explanation: "Terraform Registry modules use the format registry.example.com/organization/module-name/version, distinguishing them from Git sources (git::) and local paths (./).",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-156",
        question: "An EKS cluster uses AWS IAM Roles for Service Accounts (IRSA). A pod fails to assume its IAM role with an 'access denied' error. What is the most likely cause?",
        options: [
            "The pod does not have an AWS access key",
            "The IAM role's trust policy does not include the correct Kubernetes service account ARN",
            "The EKS cluster does not have the OIDC provider configured",
            "Both the trust policy and OIDC provider configuration should be verified"
        ],
        answer: 3,
        explanation: "IRSA requires both the OIDC provider to be configured on the EKS cluster AND the IAM role's trust policy to reference the correct service account ARN. Either misconfiguration causes access denied errors.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-157",
        question: "Which AWS service provides a managed way to run Apache Spark for big data processing without managing clusters?",
        options: [
            "Amazon EMR",
            "AWS Glue",
            "Amazon Athena",
            "Amazon Kinesis Data Analytics"
        ],
        answer: 1,
        explanation: "AWS Glue is a serverless data integration service that includes a managed Apache Spark environment for ETL jobs, eliminating the need to manage the underlying Spark cluster infrastructure.",
        difficulty: "Medium",
        topic: "AWS Basics"
    },
    {
        id: "cloud-158",
        question: "A Network ACL in AWS has an inbound rule allowing TCP port 80 from 0.0.0.0/0 with an ALLOW entry. There is no explicit DENY rule. What is the default behavior for other inbound traffic?",
        options: [
            "All other inbound traffic is allowed",
            "All other inbound traffic is denied because the default rule at the end of every NACL is a deny-all",
            "All other inbound traffic is denied only if there is a matching Security Group deny rule",
            "NACLs are stateless so the behavior depends on outbound rules"
        ],
        answer: 1,
        explanation: "Every NACL has an implicit deny-all rule at the end that cannot be modified. Any traffic not explicitly allowed by a rule is denied, unlike Security Groups which default to deny all inbound traffic.",
        difficulty: "Medium",
        topic: "Network ACL"
    },
    {
        id: "cloud-159",
        question: "A company uses Jenkins for CI/CD and wants to implement GitOps for Kubernetes deployments. Which tool combination best integrates Jenkins with GitOps principles?",
        options: [
            "Jenkins + kubectl directly",
            "Jenkins for building/pushing images + ArgoCD or Flux for syncing Kubernetes manifests from Git",
            "Jenkins + Terraform for all Kubernetes operations",
            "Replace Jenkins entirely with ArgoCD"
        ],
        answer: 1,
        explanation: "Jenkins handles the CI part (building, testing, pushing images) while ArgoCD or Flux handles the CD part by continuously syncing the desired state from Git to the Kubernetes cluster, maintaining GitOps principles.",
        difficulty: "Medium",
        topic: "GitOps"
    },
    {
        id: "cloud-160",
        question: "An Azure application uses Azure Blob Storage with hot access tier. The data is accessed frequently for the first 30 days then rarely. What is the most cost-effective configuration?",
        options: [
            "Keep all data in the hot tier",
            "Use a lifecycle management policy to transition blobs to the cool tier after 30 days",
            "Manually move data to archive tier after 30 days",
            "Use premium Blob Storage for all data"
        ],
        answer: 1,
        explanation: "Azure Blob Storage lifecycle management can automatically transition blobs from hot to cool tier after 30 days, matching the access pattern and significantly reducing storage costs for infrequently accessed data.",
        difficulty: "Medium",
        topic: "Cloud Cost Optimization"
    },
    {
        id: "cloud-161",
        question: "A Docker container writes data to /app/data. After the container is removed and recreated, the data is gone. What is the reason and fix?",
        options: [
            "Docker automatically deletes data on container restart; use 'docker update' to prevent this",
            "Container filesystem is ephemeral; use Docker volumes to persist data beyond container lifecycle",
            "The data directory permissions are incorrect; add a chmod command in the Dockerfile",
            "Docker limits container storage to 10GB; increase the storage-opt setting"
        ],
        answer: 1,
        explanation: "Container filesystems are ephemeral and tied to the container's lifecycle. To persist data, you must use Docker volumes or bind mounts that exist independently of the container.",
        difficulty: "Medium",
        topic: "Docker Containers"
    },
    {
        id: "cloud-162",
        question: "In GCP, what is the purpose of VPC Service Controls?",
        options: [
            "To provide DDoS protection for VPC resources",
            "To create a security perimeter around GCP managed services to prevent data exfiltration",
            "To manage firewall rules for Compute Engine instances",
            "To establish VPN connections between VPCs"
        ],
        answer: 1,
        explanation: "VPC Service Controls create a security perimeter around GCP managed services (like BigQuery, Cloud Storage) to mitigate data exfiltration risks by controlling how data can move in and out of the perimeter.",
        difficulty: "Medium",
        topic: "Cloud Security"
    },
    {
        id: "cloud-163",
        question: "A Kubernetes cluster has a pod that keeps getting OOMKilled. The pod has memory requests of 256Mi and limits of 512Mi. The application typically uses 400Mi. What is happening?",
        options: [
            "The memory request is too low; increase it to match the limit",
            "The application is exceeding the 512Mi memory limit, causing the kernel to terminate it",
            "The node has insufficient memory; add more nodes",
            "The memory limit should be set to unlimited"
        ],
        answer: 1,
        explanation: "OOMKilled occurs when a container exceeds its memory limit (512Mi). Even though the app 'typically' uses 400Mi, occasional spikes above 512Mi trigger the OOM killer. The limit needs to be increased.",
        difficulty: "Medium",
        topic: "Pods"
    },
    {
        id: "cloud-164",
        question: "Which AWS service provides automated reasoning to verify that your infrastructure complies with your security intent?",
        options: [
            "AWS Config",
            "Amazon Inspector",
            "AWS Verified Access",
            "AWS IAM Access Analyzer"
        ],
        answer: 3,
        explanation: "AWS IAM Access Analyzer uses automated reasoning to analyze resource-based policies and identify policies that grant overly broad access, helping ensure configurations match security intent.",
        difficulty: "Medium",
        topic: "Cloud Security"
    },
    {
        id: "cloud-165",
        question: "An organization wants to deploy infrastructure using Terraform but needs different team members to manage different components without giving everyone full access. Which Terraform feature supports this?",
        options: [
            "Terraform workspaces",
            "Terraform modules with separate state files per component and appropriate backend access controls",
            "Terraform variables with sensitive flag",
            "Terraform providers with alias configuration"
        ],
        answer: 1,
        explanation: "Using separate Terraform modules with their own state files for different components (network, compute, database) allows granular access control at the state/backend level, ensuring team members only access what they manage.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-166",
        question: "A microservices application experiences cascading failures when one service becomes slow. Which pattern best prevents this?",
        options: [
            "Increase timeouts on all services",
            "Implement the circuit breaker pattern with fallback responses",
            "Add more replicas of the failing service",
            "Use a shared database to reduce service-to-service calls"
        ],
        answer: 1,
        explanation: "The circuit breaker pattern detects failures and stops making calls to a failing service, preventing cascading failures. It can return fallback responses while the failing service recovers.",
        difficulty: "Medium",
        topic: "Microservices"
    },
    {
        id: "cloud-167",
        question: "In AWS, what is the difference between a Security Group and a Network ACL at the subnet level?",
        options: [
            "Security Groups are stateless; NACLs are stateful",
            "Security Groups are stateful and evaluate all rules; NACLs are stateless and process rules in order by rule number",
            "There is no difference; they serve the same purpose",
            "NACLs can only be applied to instances; Security Groups to subnets"
        ],
        answer: 1,
        explanation: "Security Groups are stateful (return traffic is automatically allowed) and evaluate all rules together. NACLs are stateless (return traffic must be explicitly allowed) and process rules in numerical order, stopping at the first match.",
        difficulty: "Medium",
        topic: "Security Groups"
    },
    {
        id: "cloud-168",
        question: "A GCP Cloud Run service needs to connect to a Cloud SQL instance using a private IP. Which networking configuration is required?",
        options: [
            "Configure a Serverless VPC Access connector",
            "Assign a public IP to the Cloud SQL instance",
            "Use Cloud NAT for the Cloud Run service",
            "No special configuration needed; Cloud Run can access private IPs by default"
        ],
        answer: 0,
        explanation: "Cloud Run services are serverless and need a Serverless VPC Access connector to reach resources in a VPC, such as a Cloud SQL instance with a private IP. Without the connector, Cloud Run cannot access private VPC resources.",
        difficulty: "Medium",
        topic: "Cloud Run"
    },
    {
        id: "cloud-169",
        question: "An AWS RDS Multi-AZ deployment has a primary database in us-east-1a and a standby in us-east-1b. Can the standby be used for read queries?",
        options: [
            "Yes, by connecting to the standby endpoint directly",
            "No, the standby in a Multi-AZ deployment is only for failover and cannot be used for reads",
            "Yes, but only with the Read Replica feature enabled",
            "Yes, by creating a separate read endpoint"
        ],
        answer: 1,
        explanation: "In a Multi-AZ deployment, the standby is a synchronous replica used only for automatic failover. It cannot be used for read queries. For read scaling, you need to create separate Read Replicas.",
        difficulty: "Medium",
        topic: "RDS"
    },
    {
        id: "cloud-170",
        question: "A Kubernetes admin wants to limit the total amount of CPU and memory that can be allocated in a namespace. Which resource should they create?",
        options: [
            "LimitRange",
            "ResourceQuota",
            "PodSecurityPolicy",
            "NetworkPolicy"
        ],
        answer: 1,
        explanation: "A ResourceQuota limits the total aggregate resource consumption (CPU, memory, number of pods, services, etc.) across all pods in a namespace, preventing any single namespace from consuming excessive cluster resources.",
        difficulty: "Medium",
        topic: "Namespaces"
    },
    {
        id: "cloud-171",
        question: "You need to implement a canary deployment for an API backend on AWS. Which service combination provides the most control over traffic splitting percentages?",
        options: [
            "Elastic Load Balancer with weighted target groups",
            "AWS Lambda aliases with traffic shifting + API Gateway",
            "ECS Service with CodeDeploy blue/green",
            "CloudFront with origin failover"
        ],
        answer: 1,
        explanation: "Lambda aliases with weighted routing allow precise percentage-based traffic splitting between versions (e.g., 95% to v1, 5% to v2), providing the most granular canary deployment control.",
        difficulty: "Medium",
        topic: "AWS Lambda"
    },
    {
        id: "cloud-172",
        question: "An Azure Virtual Machine Scale Set is configured with automatic scaling. The scale-in policy is set to 'Default'. What happens when scale-in occurs?",
        options: [
            "The newest VMs are deleted first",
            "The oldest VMs are deleted first",
            "Azure selects VMs for deletion based on a balanced algorithm across availability zones",
            "Random VMs are selected for deletion"
        ],
        answer: 2,
        explanation: "The 'Default' scale-in policy in Azure VMSS uses a balanced approach, selecting VMs for deletion across availability zones to maintain balance, prioritizing the newest VMs for removal.",
        difficulty: "Medium",
        topic: "Autoscaling Strategies"
    },
    {
        id: "cloud-173",
        question: "A Terraform configuration uses a for loop to create multiple S3 buckets. How do you reference a specific bucket's ARN in another resource?",
        options: [
            "aws_s3_bucket.buckets[0].arn",
            "aws_s3_bucket.buckets[\"my-bucket\"].arn",
            "The syntax depends on whether the for loop uses a map or list; for a list it would be aws_s3_bucket.buckets[0].arn and for a map it would be aws_s3_bucket.buckets[\"key\"].arn",
            "Terraform does not allow referencing resources created in for loops"
        ],
        answer: 2,
        explanation: "The reference syntax depends on the for loop structure. List-based for_each uses numeric indices ([0]), while map-based for_each uses string keys ([\"key\"]). Both are valid depending on the data structure.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-174",
        question: "A Docker container running a Java application crashes with 'Container cannot allocate memory'. The host has 16GB RAM. What is the most likely cause?",
        options: [
            "The host has insufficient total memory",
            "The container's memory limit is set too low or the JVM heap size exceeds the container's memory limit",
            "Docker does not support Java applications",
            "The container is running on a Windows host"
        ],
        answer: 1,
        explanation: "Java's JVM may attempt to allocate more memory than the container's limit allows. The JVM heap size (-Xmx) must be configured to fit within the container's memory limit, accounting for non-heap memory usage.",
        difficulty: "Medium",
        topic: "Docker Containers"
    },
    {
        id: "cloud-175",
        question: "Which AWS service provides a centralized hub for managing, governing, and analyzing data across multiple AWS accounts?",
        options: [
            "AWS Lake Formation",
            "AWS Data Catalog",
            "AWS Glue Data Catalog",
            "Amazon S3 Access Points"
        ],
        answer: 0,
        explanation: "AWS Lake Formation provides a centralized governance layer for creating, managing, and securing data lakes across multiple AWS accounts, with fine-grained access control and audit capabilities.",
        difficulty: "Medium",
        topic: "AWS Basics"
    },
    {
        id: "cloud-176",
        question: "In Kubernetes, what happens when a pod's liveness probe fails?",
        options: [
            "The pod is marked as not ready but continues running",
            "The pod is restarted by the kubelet",
            "The pod is terminated and a new pod is created by the Deployment controller",
            "The pod is scaled down by the Horizontal Pod Autoscaler"
        ],
        answer: 1,
        explanation: "When a liveness probe fails, the kubelet kills and restarts the container within the same pod. The Deployment controller is not directly involved unless the pod repeatedly fails and enters a crash loop.",
        difficulty: "Medium",
        topic: "Pods"
    },
    {
        id: "cloud-177",
        question: "An organization uses Azure DevOps for CI/CD. They want to deploy to multiple Kubernetes clusters (dev, staging, prod) using the same pipeline. Which feature best supports this?",
        options: [
            "Create separate pipelines for each environment",
            "Use environments with Kubernetes resource approvals and variable groups for environment-specific values",
            "Use a single YAML pipeline with hardcoded values for each environment",
            "Use Azure API Management to route to different clusters"
        ],
        answer: 1,
        explanation: "Azure DevOps Environments allow you to define deployment targets (like Kubernetes clusters) with approval gates, while variable groups store environment-specific configuration, enabling a single pipeline to deploy to multiple environments.",
        difficulty: "Medium",
        topic: "CI/CD"
    },
    {
        id: "cloud-178",
        question: "A company is evaluating whether to use Azure ExpressRoute or AWS Direct Connect. What is a key difference between them?",
        options: [
            "ExpressRoute uses the public internet; Direct Connect is private",
            "ExpressRoute supports multiple connection speeds and co-locations at different providers; Direct Connect has specific speed options at AWS Direct Connect locations",
            "Direct Connect supports only VPN; ExpressRoute supports only dedicated connections",
            "There is no functional difference; they are equivalent services"
        ],
        answer: 1,
        explanation: "While both provide private connectivity, ExpressRoute offers more flexibility in connection providers and speeds through partner ecosystems, while Direct Connect has standardized speeds at specific AWS locations.",
        difficulty: "Medium",
        topic: "ExpressRoute"
    },
    {
        id: "cloud-179",
        question: "A CloudFormation stack creates an S3 bucket with a name that includes the account ID. You try to deploy the same template in another account and it fails. What is the cause?",
        options: [
            "S3 bucket names must be globally unique, and the bucket already exists from the first account",
            "CloudFormation cannot create S3 buckets in multiple accounts",
            "The account ID format differs between accounts",
            "S3 bucket names cannot include account IDs"
        ],
        answer: 0,
        explanation: "S3 bucket names must be globally unique across all AWS accounts. If the template generates a deterministic bucket name, deploying in another account will fail because the name is already taken.",
        difficulty: "Medium",
        topic: "CloudFormation"
    },
    {
        id: "cloud-180",
        question: "Which observability pillar is most concerned with understanding the internal state of a system from its external outputs?",
        options: [
            "Logging",
            "Metrics",
            "Tracing",
            "Alerting"
        ],
        answer: 2,
        explanation: "Tracing (distributed tracing) follows a request through multiple services, using external outputs (logs, metrics) to infer internal system state, helping understand the full path and identify where issues occur.",
        difficulty: "Medium",
        topic: "Observability"
    },
    {
        id: "cloud-181",
        question: "A GCP organization needs to deploy a custom virtual machine image to multiple regions. Which service manages custom images across regions?",
        options: [
            "Compute Engine images with custom image replication",
            "Cloud Build for building images in each region",
            "Container Registry for VM images",
            "Deployment Manager with regional templates"
        ],
        answer: 0,
        explanation: "GCP Compute Engine allows you to create custom images and replicate them to other regions, ensuring the image is available locally in each region for faster VM provisioning.",
        difficulty: "Medium",
        topic: "Compute Engine"
    },
    {
        id: "cloud-182",
        question: "An AWS Lambda function needs to process a large file (2GB) from S3. The function has 10GB of ephemeral storage configured. What is the best approach?",
        options: [
            "Download the entire 2GB file into the Lambda's /tmp directory for processing",
            "Use S3 Select to filter the data before downloading, or use streaming to process the file in chunks",
            "Increase the Lambda memory to 10GB",
            "Store the file in EFS and process it from there"
        ],
        answer: 1,
        explanation: "While Lambda can download the file to /tmp, S3 Select can reduce the data transferred by filtering at the source, or streaming processes data in chunks, both being more efficient for large files.",
        difficulty: "Medium",
        topic: "AWS Lambda"
    },
    {
        id: "cloud-183",
        question: "A Kubernetes NetworkPolicy is created to deny all ingress traffic to pods with label app=database. However, the pods are still receiving traffic. What is the most likely cause?",
        options: [
            "NetworkPolicy does not support deny rules",
            "The Kubernetes cluster does not have a CNI plugin that supports NetworkPolicy enforcement",
            "The NetworkPolicy is in the wrong namespace",
            "Both missing CNI support and namespace misplacement could cause this"
        ],
        answer: 3,
        explanation: "NetworkPolicies are enforced by the CNI plugin. If using a CNI that doesn't support NetworkPolicy (like basic kubenet without the right configuration), policies are ignored. Also, NetworkPolicies only affect pods in the same namespace by default.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-184",
        question: "An Ansible playbook runs successfully on one server but fails on another with 'module not found'. Both servers are managed by the same control node. What is the most likely cause?",
        options: [
            "The second server has a different Python version that is incompatible",
            "The Ansible version is different for each connection",
            "The second server's Python interpreter path is different and not detected by Ansible",
            "The second server blocks Ansible's SSH connection"
        ],
        answer: 2,
        explanation: "If the target server has Python installed at a non-standard path, Ansible may not find it. Setting ansible_python_interpreter variable for that host resolves the 'module not found' error.",
        difficulty: "Medium",
        topic: "Ansible"
    },
    {
        id: "cloud-185",
        question: "A company uses AWS and wants to implement a hub-and-spoke network architecture with centralized egress to the internet. Which AWS service enables this pattern?",
        options: [
            "VPC Peering",
            "AWS Transit Gateway with a centralized egress VPC containing a NAT Gateway",
            "AWS Direct Connect",
            "AWS PrivateLink"
        ],
        answer: 1,
        explanation: "Transit Gateway acts as a hub connecting multiple VPCs (spokes). By routing all internet-bound traffic through a central egress VPC with a NAT Gateway, you achieve centralized egress with consistent security controls.",
        difficulty: "Medium",
        topic: "Cloud Networking"
    },
    {
        id: "cloud-186",
        question: "In Docker, what is the difference between CMD and ENTRYPOINT in a Dockerfile?",
        options: [
            "CMD and ENTRYPOINT are identical and interchangeable",
            "ENTRYPOINT defines the executable that always runs; CMD provides default arguments that can be overridden",
            "CMD defines the executable; ENTRYPOINT provides arguments",
            "ENTRYPOINT is for interactive containers; CMD is for background containers"
        ],
        answer: 1,
        explanation: "ENTRYPOINT specifies the main executable that always runs when the container starts. CMD provides default arguments to the ENTRYPOINT and can be easily overridden from the docker run command line.",
        difficulty: "Medium",
        topic: "Dockerfile"
    },
    {
        id: "cloud-187",
        question: "An AWS account has 50 EC2 instances across 5 VPCs. The security team needs a centralized view of all security group rules. Which approach is most efficient?",
        options: [
            "Manually review each security group in each VPC",
            "Use AWS Config with a custom query to aggregate all security group rules across VPCs",
            "Use VPC Flow Logs to infer security group rules",
            "Enable AWS Shield on all instances"
        ],
        answer: 1,
        explanation: "AWS Config can aggregate and query resource configurations across accounts and regions. A custom query or Config Rule can extract and report all security group rules in a centralized view.",
        difficulty: "Medium",
        topic: "Cloud Auditing"
    },
    {
        id: "cloud-188",
        question: "A GCP BigQuery query runs slowly on a 1TB table. The query filters on a date column and selects 5 columns. What is the most effective optimization?",
        options: [
            "Increase the query priority to interactive",
            "Partition the table by date and only query the relevant partitions",
            "Move the data to Cloud SQL",
            "Use a larger BigQuery slot reservation"
        ],
        answer: 1,
        explanation: "Partitioning by date allows BigQuery to prune irrelevant partitions, scanning only the data that matches the date filter. This is more effective than simply adding slots, as it reduces the data scanned at the source.",
        difficulty: "Medium",
        topic: "BigQuery"
    },
    {
        id: "cloud-189",
        question: "A Kubernetes Deployment has maxSurge=2 and maxUnavailable=0 during a rolling update with 5 replicas. How many pods will be running at most during the update?",
        options: [
            "5",
            "6",
            "7",
            "10"
        ],
        answer: 2,
        explanation: "With maxSurge=2, up to 2 extra pods can be created beyond the desired 5 replicas, resulting in a maximum of 7 pods (5 original + 2 new) during the rolling update.",
        difficulty: "Medium",
        topic: "Deployments"
    },
    {
        id: "cloud-190",
        question: "An Azure application gateway is configured with URL path-based routing. Requests to /api/* should go to a backend pool, but some requests are being routed incorrectly. The paths are case-sensitive. What is the fix?",
        options: [
            "Change all backend URLs to lowercase",
            "Azure Application Gateway URL path rules are case-sensitive; ensure the path patterns match the actual request case or use a rewrite rule to normalize the case",
            "Use a Network Security Group to fix the routing",
            "Switch to Azure Load Balancer which handles case-insensitive routing"
        ],
        answer: 1,
        explanation: "Azure Application Gateway path-based rules are case-sensitive. Either ensure path patterns match the exact case in requests, or use rewrite rules to normalize URLs to a consistent case before path matching.",
        difficulty: "Medium",
        topic: "Azure Basics"
    },
    {
        id: "cloud-191",
        question: "A Terraform state file contains sensitive values in plain text. What is the recommended approach to secure the state?",
        options: [
            "Encrypt the state file manually before each commit",
            "Use a remote backend with encryption at rest (like S3 with SSE) and enable sensitive output masking in Terraform",
            "Store the state file in a private Git repository",
            "Use .gitignore to prevent the state file from being tracked"
        ],
        answer: 1,
        explanation: "Using an encrypted remote backend (S3 with SSE-S3 or SSE-KMS) secures the state at rest. Additionally, marking outputs as sensitive in Terraform prevents them from appearing in CLI output and logs.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-192",
        question: "An AWS CloudFront distribution has an origin that returns a 404 for certain paths. CloudFront caches this 404 response. How do you prevent caching of error responses?",
        options: [
            "Disable CloudFront caching entirely",
            "Create a cache behavior with a custom error response that doesn't cache 4xx errors, or set a very short cache TTL for error responses",
            "Use Lambda@Edge to modify the response",
            "Both custom error caching settings and Lambda@Edge can address this"
        ],
        answer: 3,
        explanation: "CloudFront allows configuring custom error caching TTLs per error code (setting 4xx to 0 seconds prevents caching), and Lambda@Edge can modify responses before caching. Both are valid approaches.",
        difficulty: "Medium",
        topic: "CloudFront"
    },
    {
        id: "cloud-193",
        question: "A company wants to use Kubernetes but needs to run Windows containers alongside Linux containers. What are the requirements?",
        options: [
            "Any Kubernetes cluster can run both; just specify the OS in the pod spec",
            "The cluster needs dedicated Windows worker nodes with Windows Server as the OS, and node selectors/taints to schedule Windows pods appropriately",
            "Windows containers can only run on Azure Kubernetes Service",
            "Windows containers must run in a separate cluster"
        ],
        answer: 1,
        explanation: "Windows containers require Windows worker nodes because the container OS must match the host OS. The cluster needs Windows nodes with appropriate taints and tolerations to ensure Windows pods schedule only on Windows nodes.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-194",
        question: "An application uses Amazon SQS standard queue. Messages are occasionally delivered out of order and sometimes duplicated. What should the application handle?",
        options: [
            "Switch to FIFO queue which guarantees ordering and exactly-once delivery",
            "The application must be designed to be idempotent and handle out-of-order delivery, or switch to a FIFO queue",
            "Increase the visibility timeout",
            "Use a dead-letter queue"
        ],
        answer: 1,
        explanation: "Standard queues provide best-effort ordering and at-least-once delivery. Applications must handle duplicates (idempotency) and out-of-order messages, or use FIFO queues if strict ordering is required.",
        difficulty: "Medium",
        topic: "SQS"
    },
    {
        id: "cloud-195",
        question: "A Jenkins pipeline runs on a single agent. Build times increase as the team grows because jobs queue up. What is the most effective improvement?",
        options: [
            "Increase the agent's CPU and memory",
            "Configure multiple Jenkins agents and use labels to distribute build workloads",
            "Switch to GitHub Actions",
            "Reduce the number of pipeline stages"
        ],
        answer: 1,
        explanation: "Adding multiple agents with labels allows parallel build execution. Jobs can be distributed across agents based on labels (e.g., 'docker', 'maven'), reducing queue times without abandoning Jenkins.",
        difficulty: "Medium",
        topic: "Jenkins"
    },
    {
        id: "cloud-196",
        question: "In Azure, what is the purpose of a Service Endpoint in a VNet?",
        options: [
            "To expose a VM to the internet",
            "To provide private connectivity to Azure services without using a public IP address or VPN",
            "To create a VPN tunnel between two VNets",
            "To load balance traffic between VMs"
        ],
        answer: 1,
        explanation: "VNet Service Endpoints allow private IP addresses in your VNet to reach Azure service endpoints (like Storage, SQL Database) directly over the Azure backbone network, keeping traffic off the public internet.",
        difficulty: "Medium",
        topic: "Azure Virtual Network"
    },
    {
        id: "cloud-197",
        question: "A GCP project has a Cloud SQL instance with private IP only. A Compute Engine VM in the same VPC cannot connect to it. The VPC has no firewall rules explicitly denying traffic. What is the most likely cause?",
        options: [
            "Cloud SQL private IP requires a Serverless VPC Access connector",
            "The default VPC firewall rules may not allow ingress on the MySQL/PostgreSQL port from the VM's subnet",
            "Private IP Cloud SQL instances can only be accessed from Cloud Functions",
            "The Cloud SQL instance is in a different region"
        ],
        answer: 1,
        explanation: "GCP's default firewall rules allow internal traffic but may not cover all ports. The database port (3306 for MySQL, 5432 for PostgreSQL) needs an explicit firewall rule allowing ingress from the VM's subnet or IP.",
        difficulty: "Medium",
        topic: "Cloud SQL"
    },
    {
        id: "cloud-198",
        question: "An AWS organization uses AWS Control Tower to set up a multi-account environment. What additional service is commonly used with Control Tower for custom guardrails?",
        options: [
            "AWS Systems Manager",
            "AWS Config with conformance packs",
            "AWS CloudTrail",
            "Amazon Inspector"
        ],
        answer: 1,
        explanation: "AWS Config conformance packs provide pre-built and custom rule sets that work with Control Tower to enforce organizational guardrails beyond the baseline detective and preventive controls that Control Tower provides.",
        difficulty: "Medium",
        topic: "Cloud Governance"
    },
    {
        id: "cloud-199",
        question: "A Docker image uses a multi-stage build. The first stage compiles source code, and the second stage creates the final image with only the compiled binary. What is the primary benefit?",
        options: [
            "Faster build times because stages run in parallel",
            "Significantly smaller final image by excluding build tools and source code, reducing attack surface",
            "The image can run on any operating system",
            "Multi-stage builds enable hot reloading during development"
        ],
        answer: 1,
        explanation: "Multi-stage builds produce smaller final images by copying only the necessary artifacts (compiled binary) from the build stage, excluding compilers, source code, and build dependencies, which also reduces the security attack surface.",
        difficulty: "Medium",
        topic: "Dockerfile"
    },
    {
        id: "cloud-200",
        question: "A Kubernetes Horizontal Pod Autoscaler (HPA) is configured to scale based on CPU utilization with a target of 50%. Current pods use 200m out of 500m (40%). If load doubles, what will the HPA do?",
        options: [
            "Scale to 2 pods because load doubled",
            "Scale to 2 pods because the new CPU utilization would be 80% which exceeds the 50% target",
            "Not scale because 40% is below the 50% target",
            "Scale to 4 pods to maintain 50% utilization with doubled load"
        ],
        answer: 1,
        explanation: "With doubled load, each pod would use 400m/500m = 80% CPU, exceeding the 50% target. HPA calculates: desired replicas = ceil(currentReplicas * (currentMetric / targetMetric)) = ceil(1 * 80/50) = 2 pods.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-201",
        question: "An AWS S3 bucket configured with versioning has an object with three versions. You delete the object. How many versions now exist?",
        options: [
            "Zero - all versions are deleted",
            "Four - the three original versions plus a delete marker",
            "Three - the delete replaces the latest version",
            "One - the delete marker only"
        ],
        answer: 1,
        explanation: "When you delete an object in a versioned S3 bucket, a delete marker is added as the latest version. All previous versions are preserved, resulting in four total versions (3 original + 1 delete marker).",
        difficulty: "Medium",
        topic: "S3"
    },
    {
        id: "cloud-202",
        question: "A company runs a stateful application on Kubernetes and needs to perform a rolling upgrade of the node pool. What is the primary concern?",
        options: [
            "The application pods will be recreated with new IPs",
            "Pods using local storage (emptyDir) will lose their data when evicted from nodes being drained",
            "The Service endpoints will be unavailable during the upgrade",
            "The Kubernetes API server will be unavailable"
        ],
        answer: 1,
        explanation: "When nodes are drained during a rolling upgrade, pods using emptyDir lose their data because emptyDir is tied to the node's lifecycle. Stateful workloads should use PersistentVolumes that survive pod eviction.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-203",
        question: "Which Azure service provides a managed solution for running containerized workloads with built-in CI/CD and auto-scaling, without managing Kubernetes?",
        options: [
            "Azure Kubernetes Service",
            "Azure App Service for Containers",
            "Azure Container Instances",
            "Azure Container Apps"
        ],
        answer: 3,
        explanation: "Azure Container Apps is a serverless container service built on Kubernetes but without exposing Kubernetes complexity. It provides built-in autoscaling, CI/CD integration, and traffic splitting for microservices.",
        difficulty: "Medium",
        topic: "Azure Basics"
    },
    {
        id: "cloud-204",
        question: "An AWS RDS database needs to be encrypted at rest, but it was created without encryption. What is the correct approach?",
        options: [
            "Enable encryption on the existing RDS instance through a configuration change",
            "Create a snapshot of the unencrypted database, create an encrypted copy of the snapshot, then restore a new encrypted RDS instance from the encrypted snapshot",
            "Attach an AWS KMS key to the existing RDS instance",
            "Use AWS Secrets Manager to encrypt the data"
        ],
        answer: 1,
        explanation: "RDS encryption can only be configured at creation time. To encrypt an existing database, you must create a snapshot, copy it with encryption enabled, and restore a new RDS instance from the encrypted snapshot.",
        difficulty: "Medium",
        topic: "Encryption at Rest"
    },
    {
        id: "cloud-205",
        question: "In a GitOps workflow using ArgoCD, how are configuration drifts handled?",
        options: [
            "ArgoCD alerts the team via email and waits for manual correction",
            "ArgoCD detects drift between the desired state in Git and the actual cluster state, and can automatically sync to match Git (auto-sync mode)",
            "ArgoCD prevents any changes outside of Git by locking the Kubernetes API",
            "ArgoCD does not detect drift; it only applies changes on Git commits"
        ],
        answer: 1,
        explanation: "ArgoCD continuously monitors the cluster state against the Git-defined desired state. When drift is detected, in auto-sync mode it automatically reconciles the cluster to match Git, ensuring the Git repository remains the single source of truth.",
        difficulty: "Medium",
        topic: "GitOps"
    },
    {
        id: "cloud-206",
        question: "A GCP organization uses Shared VPC. A service project needs to create a Compute Engine instance in the host project's subnet. What IAM role must the service project's identity have?",
        options: [
            "roles/compute.admin",
            "roles/compute.networkUser on the subnet in the host project",
            "roles/owner in the host project",
            "roles/vpc.admin"
        ],
        answer: 1,
        explanation: "In Shared VPC, the service project's identity needs the compute.networkUser role on the specific subnet in the host project to create instances. This grants permission to use the subnet without granting full VPC administration.",
        difficulty: "Medium",
        topic: "Virtual Private Cloud"
    },
    {
        id: "cloud-207",
        question: "An application running on ECS Fargate needs to access an RDS database in a private subnet. The task definition has the correct security group. What else is required?",
        options: [
            "Nothing, Fargate tasks can access private subnets by default",
            "The Fargate task must be configured with awsvpc network mode and the task's security group must allow outbound traffic to the RDS port",
            "A NAT Gateway must be in the private subnet",
            "The RDS instance needs a public IP"
        ],
        answer: 1,
        explanation: "With awsvpc network mode, Fargate tasks receive their own ENI and can be placed in private subnets. The task's security group must allow outbound traffic to the RDS security group on the database port.",
        difficulty: "Medium",
        topic: "AWS Basics"
    },
    {
        id: "cloud-208",
        question: "A Terraform configuration needs to create resources in two different AWS regions. How should this be configured?",
        options: [
            "Create two separate Terraform configurations, one for each region",
            "Use multiple provider blocks with different aliases and specify the provider alias on each resource",
            "Use the AWS_DEFAULT_REGION environment variable for each resource",
            "Terraform does not support multi-region deployments"
        ],
        answer: 1,
        explanation: "Terraform supports multiple provider configurations using aliases. You can define 'aws.us_east_1' and 'aws.eu_west_1' provider blocks and reference them using the 'provider' attribute on each resource.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-209",
        question: "An AWS account receives a VPC Flow Log record showing REJECT for traffic from 10.0.1.5 to 10.0.2.10 on port 443. Both IPs are in the same VPC. What should you check?",
        options: [
            "The Internet Gateway configuration",
            "The security group rules on the destination (10.0.2.10) for inbound HTTPS and the NACL rules for the subnet",
            "The Route 53 configuration",
            "The VPC CIDR block configuration"
        ],
        answer: 1,
        explanation: "For intra-VPC traffic, REJECT typically means either the destination's security group doesn't allow inbound 443 from the source, or the NACL rules deny the traffic. Both should be checked.",
        difficulty: "Medium",
        topic: "VPC"
    },
    {
        id: "cloud-210",
        question: "A Kubernetes cluster uses Calico as the CNI plugin. An admin creates a NetworkPolicy that allows ingress from pods with label role=frontend to pods with label role=backend on port 8080. Frontend pods still cannot reach backend pods. What is a common oversight?",
        options: [
            "Calico does not support NetworkPolicy",
            "The egress NetworkPolicy on frontend pods or the ingress policy might also need to allow DNS traffic (port 53) for name resolution",
            "NetworkPolicy only works with Flannel CNI",
            "The policy needs to be applied to the default namespace"
        ],
        answer: 1,
        explanation: "When NetworkPolicies are applied, all non-explicitly-allowed traffic is denied. If the backend pods need DNS resolution, a separate policy allowing egress to port 53 (DNS) is often needed, otherwise name resolution fails.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-211",
        question: "An Azure Function with an HTTP trigger is returning 401 Unauthorized to all requests. The function has no authentication configured in the portal. What is the most likely cause?",
        options: [
            "Azure Functions require authentication by default; the Function App has 'Authorization level' set to 'Function' or 'Admin' instead of 'Anonymous'",
            "The Azure AD registration is misconfigured",
            "The function code has a bug",
            "The function app is stopped"
        ],
        answer: 0,
        explanation: "Azure Functions HTTP triggers have an authorization level setting. If set to 'Function' (requires function key) or 'Admin' (requires master key), requests without the appropriate key receive 401. Setting it to 'Anonymous' allows unauthenticated access.",
        difficulty: "Medium",
        topic: "Azure Functions"
    },
    {
        id: "cloud-212",
        question: "A company's cloud spending shows that 60% of EC2 costs come from instances running at less than 10% CPU utilization. Which combination of strategies would most effectively reduce these costs?",
        options: [
            "Switch all instances to Spot pricing",
            "Right-size instances based on actual utilization metrics, implement autoscaling, and use Reserved Instances or Savings Plans for predictable baseline workloads",
            "Move all workloads to Lambda",
            "Reduce instance types across the board by one size"
        ],
        answer: 1,
        explanation: "A combination approach is most effective: right-sizing eliminates over-provisioning, autoscaling adjusts to demand, and commitment-based pricing (RIs/Savings Plans) provides discounts for baseline capacity.",
        difficulty: "Medium",
        topic: "Cloud Cost Optimization"
    },
    {
        id: "cloud-213",
        question: "In Docker, when you run 'docker exec -it container_name bash' and get 'OCI runtime exec failed: exec: bash: executable file not found', what is the fix?",
        options: [
            "Rebuild the image with a larger base image",
            "Use 'sh' instead of 'bash' if the container's base image doesn't include bash (e.g., Alpine Linux uses sh)",
            "Restart the Docker daemon",
            "Run the container with --privileged flag"
        ],
        answer: 1,
        explanation: "Many minimal base images like Alpine Linux don't include bash. Using 'sh' (which is available in virtually all containers) or installing bash in the Dockerfile resolves this issue.",
        difficulty: "Medium",
        topic: "Docker Containers"
    },
    {
        id: "cloud-214",
        question: "An AWS Step Functions workflow orchestrates multiple Lambda functions. One Lambda function fails intermittently. How should you handle this to make the workflow resilient?",
        options: [
            "Increase the Lambda timeout for all functions",
            "Add a retry handler with exponential backoff and a catch state for fallback processing in the Step Functions definition",
            "Replace Lambda with ECS tasks",
            "Run multiple copies of the Lambda function"
        ],
        answer: 1,
        explanation: "Step Functions supports retry with exponential backoff at the state level, and catch states for fallback processing. This makes the workflow resilient to transient Lambda failures without modifying the Lambda code.",
        difficulty: "Medium",
        topic: "AWS Lambda"
    },
    {
        id: "cloud-215",
        question: "A Kubernetes admin needs to provide a developer access to logs of pods in the 'staging' namespace only, without the ability to modify any resources. Which RBAC configuration is correct?",
        options: [
            "Create a ClusterRole with get/list/watch on pods and bind it with a ClusterRoleBinding",
            "Create a Role in the 'staging' namespace with get/list/watch on pods/logs and bind it with a RoleBinding to the developer's ServiceAccount",
            "Give the developer the 'view' ClusterRole",
            "Add the developer to the 'system:authenticated' group"
        ],
        answer: 1,
        explanation: "A Role scoped to the 'staging' namespace with permissions to get/list/watch pod logs, bound via RoleBinding to the developer's ServiceAccount, provides the precise access needed without granting cluster-wide permissions.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-216",
        question: "An Azure Data Factory pipeline needs to copy data from an on-premises SQL Server to Azure Blob Storage daily. Which component is required for the on-premises connection?",
        options: [
            "Azure ExpressRoute",
            "Self-hosted Integration Runtime (IR) installed on an on-premises machine",
            "Azure VPN Gateway",
            "Azure API Management"
        ],
        answer: 1,
        explanation: "A Self-hosted Integration Runtime is a component installed on an on-premises machine that enables Azure Data Factory to access on-premises data sources securely without requiring a VPN or ExpressRoute.",
        difficulty: "Medium",
        topic: "Azure Basics"
    },
    {
        id: "cloud-217",
        question: "A Terraform module defines a variable with type = list(string) and default = [\"dev\", \"staging\"]. A user passes environments = \"production\". What happens?",
        options: [
            "Terraform automatically converts the string to a list",
            "Terraform produces a type mismatch error at plan time",
            "Terraform ignores the input and uses the default",
            "Terraform converts it to [\"production\"]"
        ],
        answer: 1,
        explanation: "Terraform performs strict type checking. Passing a string where a list(string) is expected causes a type mismatch error at plan time, preventing the configuration from being applied with incorrect types.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-218",
        question: "An AWS CloudWatch dashboard shows memory utilization at 90% but CPU at 20% for an EC2 instance. The application is a caching layer. What is the most appropriate action?",
        options: [
            "Scale up the instance type for more CPU",
            "Review the cache eviction policy and consider increasing the instance memory or adding more cache nodes",
            "Reduce the cache TTL",
            "Migrate to serverless caching"
        ],
        answer: 1,
        explanation: "High memory with low CPU for a caching layer indicates the cache is full and likely evicting data frequently. Increasing memory or adding nodes improves cache hit ratio, while tuning eviction policies optimizes memory usage.",
        difficulty: "Medium",
        topic: "Cloud Monitoring"
    },
    {
        id: "cloud-219",
        question: "A GCP Cloud Storage bucket has Object Versioning enabled. After 100 days, you want to keep only the latest 3 versions of each object. How can you achieve this?",
        options: [
            "Set a lifecycle rule to delete noncurrent versions older than a certain age",
            "Use a Cloud Function triggered by object changes to delete old versions",
            "Manually delete old versions using gsutil",
            "Both a lifecycle rule and a Cloud Function approach can work, but lifecycle rules are simpler"
        ],
        answer: 3,
        explanation: "GCP Cloud Storage lifecycle rules can automatically delete noncurrent object versions based on age. This is simpler and more cost-effective than custom Cloud Functions, though both approaches can achieve the goal.",
        difficulty: "Medium",
        topic: "Cloud Storage"
    },
    {
        id: "cloud-220",
        question: "An organization uses a monolithic application deployed on a single large EC2 instance. The application has three modules: user management, order processing, and reporting. Which refactoring approach is most pragmatic for initial cloud migration?",
        options: [
            "Rewrite the entire application as microservices before migrating",
            "Deploy the monolith to a container, then incrementally extract modules into separate services starting with the most independent module",
            "Keep the monolith as-is and add more CPU when needed",
            "Split the monolith into three EC2 instances sharing a database"
        ],
        answer: 1,
        explanation: "The strangler fig pattern - containerizing the monolith first, then incrementally extracting modules into separate services - is the most pragmatic approach, reducing risk while progressively moving toward microservices.",
        difficulty: "Medium",
        topic: "Refactoring"
    },
    {
        id: "cloud-221",
        question: "A Kubernetes cluster has pods that can start but cannot resolve DNS names. The CoreDNS pods are running. Which diagnostic step is most informative?",
        options: [
            "Restart the CoreDNS pods",
            "Check the CoreDNS ConfigMap for errors and verify the pod's /etc/resolv.conf points to the cluster DNS IP",
            "Delete all pods so they restart with correct DNS",
            "Reinstall the cluster"
        ],
        answer: 1,
        explanation: "Checking the CoreDNS ConfigMap for configuration errors (like incorrect upstream DNS or plugin misconfiguration) and verifying each pod's resolv.conf has the correct cluster DNS service IP are the most targeted diagnostic steps.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-222",
        question: "An AWS account has an IAM policy that allows s3:GetObject on arn:aws:s3:::my-bucket/*. Can the user list objects in the bucket?",
        options: [
            "Yes, GetObject implicitly allows listing",
            "No, s3:ListBucket is a separate permission required on the bucket ARN (arn:aws:s3:::my-bucket) to list objects",
            "Yes, but only the first 100 objects",
            "No, the user cannot access anything without s3:ListBucket"
        ],
        answer: 1,
        explanation: "s3:GetObject allows reading individual objects but s3:ListBucket is a separate permission on the bucket itself (not the objects). Without ListBucket, the user can access objects by name but cannot enumerate them.",
        difficulty: "Medium",
        topic: "IAM"
    },
    {
        id: "cloud-223",
        question: "A Docker container needs to pass environment variables from the host to the container at runtime. Which approach is most secure for sensitive values?",
        options: [
            "Pass them as command-line arguments in docker run",
            "Use Docker secrets or mount them from a secrets manager, rather than environment variables for sensitive data",
            "Hardcode them in the Dockerfile",
            "Use --env-file with a plaintext file"
        ],
        answer: 1,
        explanation: "Environment variables can be exposed through /proc or docker inspect. For sensitive values, Docker secrets (Swarm) or integrating with a secrets manager (AWS Secrets Manager, HashiCorp Vault) provides better security.",
        difficulty: "Medium",
        topic: "Secrets Management"
    },
    {
        id: "cloud-224",
        question: "An Azure API Management instance is fronting multiple backend services. One backend occasionally returns 5xx errors. How can you configure API Management to handle this gracefully?",
        options: [
            "Disable the backend service in API Management",
            "Configure a retry policy with exponential backoff and a fallback response using API Management policies",
            "Increase the backend timeout to 5 minutes",
            "Set up Azure Monitor alerts only"
        ],
        answer: 1,
        explanation: "API Management's policy engine allows configuring retry policies with backoff for transient errors and fallback responses when the backend is unavailable, providing a graceful degradation experience for clients.",
        difficulty: "Medium",
        topic: "API Gateway"
    },
    {
        id: "cloud-225",
        question: "A GCP project owner wants to delegate the ability to create Compute Engine instances to a team member, but only in the us-central1 region. Can this be done with IAM alone?",
        options: [
            "Yes, using a custom IAM role scoped to the us-central1 region",
            "No, IAM conditions can restrict by region, but the base role must still grant compute.instance.create and a condition can limit it to us-central1",
            "No, IAM cannot be scoped by region at all",
            "Yes, using the predefined role roles/compute.instanceAdmin.v1 with a region tag"
        ],
        answer: 1,
        explanation: "IAM supports conditions that can restrict permissions based on resource attributes like region. A conditional IAM policy can grant compute.instance.create with a condition limiting it to resources in us-central1.",
        difficulty: "Medium",
        topic: "Cloud IAM"
    },
    {
        id: "cloud-226",
        question: "An AWS ECS service uses Application Load Balancer for routing. During deployment, the new task fails health checks. What is the default ECS deployment behavior?",
        options: [
            "ECS immediately stops the deployment and keeps the old tasks running",
            "ECS continues to start new tasks while old tasks remain, potentially serving traffic from both versions",
            "ECS rolls back to the previous task definition after the deployment circuit breaker triggers",
            "ECS stops all tasks, causing downtime"
        ],
        answer: 2,
        explanation: "ECS deployment circuit breaker monitors for consecutive failures. When the failure threshold is reached, ECS automatically rolls back to the previous task definition, preventing prolonged service degradation.",
        difficulty: "Medium",
        topic: "AWS Basics"
    },
    {
        id: "cloud-227",
        question: "A Terraform configuration uses a module from the Terraform Registry. You need to modify the module's behavior. What is the best practice?",
        options: [
            "Fork the module, make changes, and use your forked repository as the source",
            "Check if the module supports customization through input variables before forking; if not, fork and maintain your own version",
            "Modify the module's source code directly in the Terraform cache",
            "Avoid using modules and write all resources inline"
        ],
        answer: 1,
        explanation: "Before forking, check if the module exposes variables for the behavior you need. If it doesn't, forking is appropriate, but be aware of the maintenance burden of tracking upstream changes.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-228",
        question: "A Kubernetes cluster runs in an on-premises data center. How do you expose a service to external users without a cloud load balancer?",
        options: [
            "Use a LoadBalancer service type (it will work automatically)",
            "Use a NodePort service combined with an external load balancer (like HAProxy or Nginx), or use an Ingress controller with an external load balancer",
            "Use a ClusterIP service and expose it via DNS",
            "Kubernetes cannot expose services externally without a cloud provider"
        ],
        answer: 1,
        explanation: "Without a cloud provider's load balancer integration, NodePort services expose the service on a port across all nodes. An external load balancer (physical or software) then distributes traffic to the nodes.",
        difficulty: "Medium",
        topic: "Services"
    },
    {
        id: "cloud-229",
        question: "An AWS S3 bucket receives 10,000 PUT requests per second. The application team reports intermittent 503 Slow Down errors. What is the most likely cause and solution?",
        options: [
            "S3 cannot handle this load; migrate to a database",
            "The requests are hitting a single prefix, exceeding S3's per-prefix limit; distribute objects across multiple prefixes",
            "Enable S3 Transfer Acceleration",
            "Increase the S3 bucket size"
        ],
        answer: 1,
        explanation: "S3 supports high request rates but has per-prefix limits (3,500 PUTs/sec for non-S3 Express One Zone). If all objects share a common prefix, distributing them across multiple prefixes increases aggregate throughput.",
        difficulty: "Medium",
        topic: "S3"
    },
    {
        id: "cloud-230",
        question: "A Jenkins declarative pipeline has a 'post' block with 'always' and 'failure' conditions. If the pipeline fails, which post sections execute?",
        options: [
            "Only 'failure'",
            "Only 'always'",
            "Both 'failure' and 'always', in the order they are defined",
            "Neither; post blocks only run on success"
        ],
        answer: 2,
        explanation: "In Jenkins declarative pipeline, both 'failure' and 'always' sections execute when the pipeline fails. The 'always' condition runs regardless of status, and 'failure' runs when the status is failed, in their defined order.",
        difficulty: "Medium",
        topic: "Jenkins"
    },
    {
        id: "cloud-231",
        question: "An organization needs to run a compliance audit across all their AWS accounts to find all publicly accessible S3 buckets. Which AWS service provides this capability natively?",
        options: [
            "AWS CloudTrail",
            "AWS Audit Manager",
            "Amazon Macie",
            "AWS Trusted Advisor"
        ],
        answer: 1,
        explanation: "AWS Audit Manager continuously maps your AWS usage to specific control objectives (like preventing public S3 buckets), providing evidence collection and compliance reporting across accounts.",
        difficulty: "Medium",
        topic: "Cloud Auditing"
    },
    {
        id: "cloud-232",
        question: "A Helm chart needs to conditionally include a resource based on a values file setting. Which Helm template feature enables this?",
        options: [
            "Helm hooks",
            "if/else conditionals in the template using the 'if' directive",
            "Helm plugins",
            "Chart dependencies"
        ],
        answer: 1,
        explanation: "Helm templates support Go template conditionals ({{ if .Values.enabled }}...{{ end }}) to conditionally include or exclude resources based on values file settings.",
        difficulty: "Medium",
        topic: "Helm"
    },
    {
        id: "cloud-233",
        question: "A multi-tier application has a web tier, application tier, and database tier. The application tier initiates connections to the database. In a VPC design, which subnets should each tier be in?",
        options: [
            "All tiers in public subnets for simplicity",
            "Web tier in public subnets, application and database tiers in private subnets (with database in a separate private subnet for additional isolation)",
            "Web and application in public, database in private",
            "All tiers in private subnets with a NAT Gateway"
        ],
        answer: 1,
        explanation: "The web tier needs internet access (public subnet), while the application and database tiers should be in private subnets. Placing the database in a separate private subnet provides an additional layer of network isolation.",
        difficulty: "Medium",
        topic: "VPC"
    },
    {
        id: "cloud-234",
        question: "An Azure application uses Azure Key Vault to store database connection strings. The application running on App Service fails to retrieve secrets with a 403 Forbidden error. What is the most likely cause?",
        options: [
            "The Key Vault is in a different region",
            "The App Service's managed identity does not have the required Key Vault access policy or RBAC permission",
            "The connection string format is incorrect",
            "Azure Key Vault does not work with App Service"
        ],
        answer: 1,
        explanation: "The App Service needs a system-assigned or user-assigned managed identity, and that identity must be granted Get/List secrets permissions in Key Vault through either access policies or RBAC role assignment.",
        difficulty: "Medium",
        topic: "Secrets Management"
    },
    {
        id: "cloud-235",
        question: "A GCP organization wants to ensure all Compute Engine disks are encrypted with customer-managed encryption keys (CMEK). How can this be enforced?",
        options: [
            "Use an Organization Policy constraint to require CMEK for Compute Engine disks",
            "Manually verify each disk's encryption setting",
            "Use Cloud Monitoring alerts",
            "Enable default encryption which uses CMEK automatically"
        ],
        answer: 0,
        explanation: "GCP Organization Policy constraints can enforce the use of CMEK for Compute Engine resources, automatically preventing the creation of disks that use Google-managed encryption keys.",
        difficulty: "Medium",
        topic: "Encryption at Rest"
    },
    {
        id: "cloud-236",
        question: "A Docker container's application writes logs to stdout. You want to send these logs to a centralized logging system. Which approach is most aligned with container best practices?",
        options: [
            "Modify the application to write logs directly to the logging system",
            "Use a Docker logging driver (like fluentd, json-file, or awslogs) to forward container stdout to the centralized system",
            "Install a log shipper inside each container",
            "Use docker cp to copy logs periodically"
        ],
        answer: 1,
        explanation: "Docker logging drivers can forward container stdout/stderr to various logging backends without modifying the application. This is the standard approach for container log management.",
        difficulty: "Medium",
        topic: "Docker Containers"
    },
    {
        id: "cloud-237",
        question: "An AWS CloudFormation stack is in UPDATE_ROLLBACK_FAILED state. What must you do before you can update the stack again?",
        options: [
            "Simply retry the update",
            "Continue the rollback to bring the stack to a stable state (UPDATE_ROLLBACK_COMPLETE) before making any new changes",
            "Delete the entire stack and recreate it",
            "Contact AWS Support"
        ],
        answer: 1,
        explanation: "When a rollback fails, the stack is in an unstable state. You must first continue the rollback (which may require skipping resources that can't be rolled back) to reach a stable state before making new updates.",
        difficulty: "Medium",
        topic: "CloudFormation"
    },
    {
        id: "cloud-238",
        question: "A Kubernetes cluster has a pod that needs to run on a node with an SSD. Nodes with SSDs have the label disktype=ssd. How do you ensure the pod schedules on the correct node?",
        options: [
            "Set a nodeSelector in the pod spec: nodeSelector: { disktype: ssd }",
            "Manually specify the node name in the pod spec",
            "Use a DaemonSet instead of a Deployment",
            "Add a taint to nodes without SSDs"
        ],
        answer: 0,
        explanation: "nodeSelector is the simplest way to constrain a pod to specific nodes based on labels. For more complex scheduling requirements, node affinity or taint/tolerations would be used.",
        difficulty: "Medium",
        topic: "Pods"
    },
    {
        id: "cloud-239",
        question: "An application uses AWS SQS as a message buffer between a producer and consumer. The consumer processes messages slower than the producer during peak times. What is the risk and mitigation?",
        options: [
            "Risk: messages are lost. Mitigation: enable SQS message deduplication",
            "Risk: queue grows indefinitely, increasing costs and processing lag. Mitigation: implement a dead-letter queue, set alarm on queue depth, and scale consumers",
            "Risk: SQS has a maximum queue size. Mitigation: use multiple queues",
            "Risk: producer will be throttled. Mitigation: increase SQS quota"
        ],
        answer: 1,
        explanation: "If consumers can't keep up, the queue grows, increasing costs (storage charges) and processing lag. Setting depth alarms, configuring DLQs for failed messages, and auto-scaling consumers mitigate this.",
        difficulty: "Medium",
        topic: "SQS"
    },
    {
        id: "cloud-240",
        question: "A company uses Azure DevOps and wants to enforce that all pull requests have at least two approvals before merging. Where is this configured?",
        options: [
            "In the build pipeline YAML",
            "In the repository branch policies",
            "In the project settings under security",
            "In the Azure AD group configuration"
        ],
        answer: 1,
        explanation: "Branch policies in Azure Repos allow configuring required reviewers (minimum number of approvals), check-in policies, build validation, and other controls that must pass before a PR can be merged.",
        difficulty: "Medium",
        topic: "CI/CD"
    },
    {
        id: "cloud-241",
        question: "A GCP BigQuery table has 500 columns but queries typically select only 5-10 columns. How can query costs be reduced?",
        options: [
            "Partition the table",
            "Use column-level security to hide unused columns",
            "BigQuery charges by data scanned; selecting only needed columns already minimizes cost, but consider denormalizing into narrower tables for frequent query patterns",
            "Increase the query priority"
        ],
        answer: 2,
        explanation: "BigQuery charges by the amount of data scanned. While selecting specific columns helps, creating narrower, purpose-specific tables (or views) for common query patterns can further reduce scanned data and costs.",
        difficulty: "Medium",
        topic: "BigQuery"
    },
    {
        id: "cloud-242",
        question: "An organization is implementing a multi-cloud strategy using both AWS and Azure. What is a significant challenge they should plan for?",
        options: [
            "Both clouds use the same networking model, so no challenges exist",
            "Differences in IAM models, networking constructs, API conventions, and service parity require abstraction layers and duplicated operational expertise",
            "Multi-cloud is not technically possible",
            "The only challenge is cost management"
        ],
        answer: 1,
        explanation: "Multi-cloud introduces complexity in IAM (different identity models), networking (different VPC/VNet constructs), APIs, and service capabilities. Teams need broader expertise and often build abstraction layers to manage this complexity.",
        difficulty: "Medium",
        topic: "Multi Cloud"
    },
    {
        id: "cloud-243",
        question: "A Terraform state file is stored in an S3 bucket with DynamoDB for locking. A team member runs 'terraform destroy' accidentally. How can you recover?",
        options: [
            "Terraform automatically backs up state before destroy",
            "Enable S3 versioning on the state bucket to recover the previous state file version, then run 'terraform apply' to recreate resources",
            "Contact AWS Support to undo the destroy",
            "Recover from the .terraform directory"
        ],
        answer: 1,
        explanation: "S3 versioning keeps previous versions of the state file. You can restore the pre-destroy state version and use 'terraform apply' to reconcile the actual infrastructure with the restored state, though some resources may be permanently lost.",
        difficulty: "Medium",
        topic: "Terraform"
    },
    {
        id: "cloud-244",
        question: "An AWS RDS for PostgreSQL instance needs to replicate data to another AWS region for disaster recovery. Which replication method provides the lowest RPO?",
        options: [
            "Scheduled RDS snapshots copied to the DR region",
            "RDS cross-region read replica with synchronous replication",
            "RDS cross-region read replica with asynchronous replication",
            "Custom logical replication using pg_dump and restore"
        ],
        answer: 2,
        explanation: "RDS cross-region read replicas use asynchronous replication, providing a much lower RPO (seconds to minutes) compared to snapshot-based approaches (hours). Note that RDS cross-region replicas are asynchronous, not synchronous.",
        difficulty: "Medium",
        topic: "RDS"
    },
    {
        id: "cloud-245",
        question: "A Kubernetes cluster uses the default scheduler. Two pods have anti-affinity rules that conflict with each other given the available nodes. What happens?",
        options: [
            "Kubernetes randomly places one pod and ignores the anti-affinity of the other",
            "Both pods remain in Pending state indefinitely",
            "The scheduler places the first pod and the second pod's anti-affinity is best-effort (ignored if it cannot be satisfied)",
            "It depends on whether the anti-affinity is 'required' (hard) or 'preferred' (soft); required causes Pending, preferred is best-effort"
        ],
        answer: 3,
        explanation: "Required anti-affinity rules must be satisfied; if they can't be, the pod stays Pending. Preferred anti-affinity rules are best-effort; the scheduler tries to satisfy them but will place the pod even if they can't be met.",
        difficulty: "Medium",
        topic: "Kubernetes"
    },
    {
        id: "cloud-246",
        question: "An Azure Virtual Machine Scale Set is configured with application health probes. A VM is marked as unhealthy. What happens next depends on the health probe configuration?",
        options: [
            "The VM is always immediately deleted and replaced",
            "The VM is always automatically repaired regardless of configuration",
            "If automatic repairs are enabled, after the unhealthy threshold is met, the VM instance is deleted and a new one is created",
            "The VM is restarted in-place without replacement"
        ],
        answer: 2,
        explanation: "When automatic repairs are enabled and a VM fails the health probe for the configured number of probe failures (unhealthy threshold), the VMSS automatically replaces the unhealthy VM instance with a new one.",
        difficulty: "Medium",
        topic: "Azure Virtual Machines"
    },
    {
        id: "cloud-247",
        question: "A Docker Swarm service has 5 replicas spread across 3 nodes. One node fails. What happens?",
        options: [
            "The 2 replicas on the failed node are permanently lost",
            "Docker Swarm automatically reschedules the 2 lost replicas on the remaining healthy nodes to maintain the desired 5 replicas",
            "The service is degraded to 3 replicas until the failed node recovers",
            "Docker Swarm does not provide self-healing"
        ],
        answer: 1,
        explanation: "Docker Swarm's built-in self-healing detects when a node fails and automatically reschedules the affected service replicas on remaining healthy nodes to maintain the desired replica count.",
        difficulty: "Medium",
        topic: "Docker Containers"
    },
    {
        id: "cloud-248",
        question: "An AWS Lambda function accesses an RDS database. The Lambda function times out at the default 3 seconds. The database query takes 2 seconds. What is likely happening?",
        options: [
            "Lambda has a minimum execution time of 5 seconds",
            "The connection establishment to RDS (cold start) plus the 2-second query exceeds the 3-second timeout",
            "RDS blocks Lambda connections by default",
            "Lambda cannot connect to RDS directly"
        ],
        answer: 1,
        explanation: "Lambda cold starts include connection establishment time. If the RDS connection takes 1-2 seconds (TLS handshake, authentication) plus the 2-second query, the total easily exceeds the 3-second default timeout.",
        difficulty: "Medium",
        topic: "AWS Lambda"
    },
    {
        id: "cloud-249",
        question: "A company wants to implement Infrastructure as Code but has existing infrastructure that was manually created. What is the recommended approach to bring this under IaC management?",
        options: [
            "Delete all manual infrastructure and recreate it with Terraform",
            "Use Terraform import to bring existing resources into Terraform state, then manage them going forward",
            "Leave existing infrastructure manual and only manage new resources with IaC",
            "Use AWS CloudFormation drift detection only"
        ],
        answer: 1,
        explanation: "Terraform import brings existing resources under Terraform management by adding them to the state file. You then write configuration matching the imported resources, enabling future changes through Terraform.",
        difficulty: "Medium",
        topic: "Infrastructure as Code"
    },
    {
        id: "cloud-250",
        question: "An Azure application uses Azure Cosmos DB with Strong consistency. The application experiences high latency and frequent request rate limiting. What is the most likely cause and optimization?",
        options: [
            "Strong consistency requires quorum reads/writes across regions; relaxing to Session or Bounded Staleness consistency can reduce latency while still meeting most application requirements",
            "Cosmos DB does not support Strong consistency for high-throughput applications",
            "Increase the provisioned RU/s without changing consistency",
            "Switch to a different database service"
        ],
        answer: 0,
        explanation: "Strong consistency requires synchronous replication across all replicas, increasing latency and RU consumption. Most applications can use weaker consistency levels (Session, Bounded Staleness) for better performance.",
        difficulty: "Medium",
        topic: "Cloud Databases"
    },
    {
        id: "cloud-251",
        question: "A large enterprise has 100+ AWS accounts and needs to centrally manage firewall rules across all VPCs. The rules should be consistent but allow regional variations. Which approach scales best?",
        options: [
            "Manually configure Security Groups in each account",
            "Use AWS Organizations with Service Control Policies and AWS Config conformance packs combined with AWS Firewall Manager for centralized rule management",
            "Use a single shared VPC for all accounts",
            "Deploy a third-party firewall in each VPC"
        ],
        answer: 1,
        explanation: "AWS Firewall Manager centrally manages AWS WAF rules, Shield Advanced protections, and network firewall policies across accounts. Combined with SCPs and Config, it provides scalable, consistent security governance.",
        difficulty: "Hard",
        topic: "Cloud Security"
    },
    {
        id: "cloud-252",
        question: "A Kubernetes cluster with 1000 nodes experiences API server latency spikes during peak hours. Investigation shows high numbers of WATCH requests from multiple controllers. What is the most effective optimization?",
        options: [
            "Increase the API server CPU and memory",
            "Implement a shared informer cache pattern across controllers, reduce the number of custom controllers, and consider splitting the cluster or using kube-apiserver caching optimizations",
            "Remove all watchers and use periodic GET requests instead",
            "Disable RBAC to reduce API server load"
        ],
        answer: 1,
        explanation: "Multiple controllers each maintaining WATCH connections to the API server creates significant load. Shared informer caches, controller consolidation, and cluster splitting are proven approaches for large-scale Kubernetes.",
        difficulty: "Hard",
        topic: "Kubernetes"
    },
    {
        id: "cloud-253",
        question: "An AWS architecture uses a Lambda function that is invoked 10 million times per day with an average execution time of 200ms at 256MB memory. The team considers moving to a Container on ECS Fargate. What is the trade-off?",
        options: [
            "Fargate will be cheaper because containers are more efficient",
            "Lambda costs approximately $8.66/day; Fargate with a 0.5 vCPU, 1GB task running 24/7 costs approximately $12.96/day plus per-request costs, so Lambda is significantly cheaper for this sporadic workload pattern",
            "Both will cost exactly the same",
            "Fargate is always cheaper for any workload"
        ],
        answer: 1,
        explanation: "For sporadic, short-duration invocations, Lambda's pay-per-request model is far more cost-effective than Fargate's per-second billing with minimum task durations. Lambda: 10M * $0.000000208 + compute = ~$8.66/day vs Fargate 24/7 billing.",
        difficulty: "Hard",
        topic: "Cloud Cost Optimization"
    },
    {
        id: "cloud-254",
        question: "A company runs a global e-commerce platform on AWS. They need sub-100ms latency for product catalog reads globally, with strong consistency for inventory updates. Which architecture best satisfies these conflicting requirements?",
        options: [
            "Single DynamoDB table in us-east-1 with global reads",
            "DynamoDB Global Tables for the product catalog (eventual consistency, but acceptable for reads) with a single-region DynamoDB table for inventory (strong consistency), using a write-forwarding pattern for inventory updates",
            "Multi-region RDS with synchronous replication",
            "ElastiCache Redis Cluster with global datastore"
        ],
        answer: 1,
        explanation: "This separates the two concerns: Global Tables provide fast local reads for the catalog (eventual consistency is acceptable for product browsing), while a single-region table ensures strong consistency for inventory that can't tolerate conflicts.",
        difficulty: "Hard",
        topic: "Cloud Architecture"
    },
    {
        id: "cloud-255",
        question: "A Terraform configuration manages 500+ resources. The apply phase takes 30+ minutes because resources are created sequentially. How can you significantly reduce apply time without changing the infrastructure?",
        options: [
            "Increase the Terraform process CPU and memory",
            "Terraform automatically parallelizes independent resources; if it's taking 30 minutes, there are likely implicit dependencies forcing sequential execution that need to be identified and removed using depends_on carefully or restructuring the configuration",
            "Run multiple terraform apply commands simultaneously",
            "Use Terraform Cloud which is always faster"
        ],
        answer: 1,
        explanation: "Terraform parallelizes by default but serializes resources with dependencies. Long apply times often indicate implicit dependencies (through attribute references) forcing sequential execution. Restructuring to remove unnecessary dependencies enables parallelism.",
        difficulty: "Hard",
        topic: "Terraform"
    },
    {
        id: "cloud-256",
        question: "A Kubernetes cluster runs a critical payment processing service. A rolling update causes a brief period where some requests receive HTTP 502 errors. The Service has no readiness gate configured. What is the root cause and fix?",
        options: [
            "The Kubernetes Service is misconfigured; use a LoadBalancer type instead",
            "During rolling update, new pods receive traffic before they are ready to handle requests. Configure a proper readiness probe on the pod spec so endpoints are only added to the Service when the application is actually ready",
            "Increase the maxUnavailable to 0 in the Deployment",
            "Use a DaemonSet instead of a Deployment"
        ],
        answer: 1,
        explanation: "Without a readiness probe, Kubernetes adds pods to Service endpoints immediately after container startup, before the application is ready. A readiness probe ensures traffic only goes to pods that can actually handle requests.",
        difficulty: "Hard",
        topic: "Kubernetes"
    },
    {
        id: "cloud-257",
        question: "An AWS VPC peering connection between VPC-A (10.0.0.0/16) and VPC-B (10.0.0.0/16) cannot be created. What is the reason?",
        options: [
            "VPC peering requires a VPN connection first",
            "VPC peering does not work between VPCs with overlapping CIDR blocks",
            "VPC peering is limited to VPCs in the same availability zone",
            "Both VPCs must be in the same AWS account"
        ],
        answer: 1,
        explanation: "VPC peering requires non-overlapping CIDR blocks between the peered VPCs. Since both VPCs use 10.0.0.0/16, the peering connection cannot be established due to routing conflicts.",
        difficulty: "Hard",
        topic: "VPC"
    },
    {
        id: "cloud-258",
        question: "A microservices architecture has 50 services communicating via a service mesh. During a network partition, you observe cascading retries causing a retry storm that overwhelms surviving services. Which combination of service mesh features prevents this?",
        options: [
            "Increase timeout values across all services",
            "Circuit breakers with automatic trip, retry budgets with concurrent retry limits, and client-side load balancing with outlier detection",
            "Disable all retries globally",
            "Use synchronous communication instead of asynchronous"
        ],
        answer: 1,
        explanation: "A comprehensive approach combines circuit breakers (to stop calling failing services), retry budgets (limiting total retries, not just per-request), and outlier detection (ejecting unhealthy instances) to prevent cascade failures.",
        difficulty: "Hard",
        topic: "Microservices"
    },
    {
        id: "cloud-259",
        question: "An organization discovers that a developer accidentally committed an AWS access key to a public GitHub repository. The key was created 30 days ago. What is the immediate incident response sequence?",
        options: [
            "Delete the GitHub repository, then rotate the key",
            "Immediately deactivate/delete the access key in AWS IAM, review CloudTrail for all actions performed by that key since creation, rotate credentials, and implement preventive controls like Git-secrets scanning",
            "Change the IAM user password",
            "Create a new access key and delete the old one"
        ],
        answer: 1,
        explanation: "Immediate key deactivation stops further unauthorized access. CloudTrail review determines the blast radius. Credential rotation restores legitimate access. Preventive controls (pre-commit hooks, scanning) prevent recurrence.",
        difficulty: "Hard",
        topic: "Cloud Incident Response"
    },
    {
        id: "cloud-260",
        question: "A GCP Cloud SQL instance with High Availability (HA) configuration fails over to the standby zone. After failover, the application connection string doesn't need to change. How does this work?",
        options: [
            "Cloud SQL automatically updates DNS to point to the new zone",
            "Cloud SQL HA uses a regional IP address that automatically routes to the current primary instance regardless of zone",
            "The application must reconnect using a different IP",
            "GCP Load Balancer handles the failover transparently"
        ],
        answer: 1,
        explanation: "Cloud SQL HA provides a regional IP address that is abstracted from the underlying zone. During failover, this IP automatically routes to the new primary, so the application connection string remains unchanged.",
        difficulty: "Hard",
        topic: "Cloud SQL"
    }
]