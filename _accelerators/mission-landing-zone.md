---
short_name: "Mission Landing Zone"
name: "Mission Landing Zone"
title: "Mission Landing Zone"
accelerator_type: "Technology Accelerator"
classification: "Technology Accelerator"
solution_area: "Apps & Infrastructure"
status: "Beta"
primary_industry: "State & Local Government"
industries: "Horizontal"
technology_stack: "Bicep,Terraform,Azure Bastion Azure Virtual Machine,Azure Firewall,Azure Defender,Azure Policy,Azure Sentinel,Azure Storage,Log Analytics"
github_url: https://github.com/azure/missionlz
demo_url: 
customer_overview_url: 
customer_deck_url: 
short_text: "Create a cloud management system to deploy Azure environments."
hero_image: assets/images/Mission-Landing-Zone-Hero.png
tags: "\"Technology Accelerator\",\"Technology Accelerator\",\"State & Local Government\",\"Horizontal\",\"Bicep\",\"Terraform\",\"Azure Bastion Azure Virtual Machine\",\"Azure Firewall\",\"Azure Defender\",\"Azure Policy\",\"Azure Sentinel\",\"Azure Storage\",\"Log Analytics\",\"Apps & Infrastructure\",\"Beta\""
last_updated: "2022-08-01T19:15:41Z"
related: ""
order: 2
---
** About this Technology Accelerator

Mission Landing Zone is a highly opinionated Infrastructure-as-Code (IaC) template which IT oversight organizations can use to create a cloud management system to deploy Azure environments for their workloads and teams.

Mission Landing Zone addresses a narrowly scoped, specific need for a Secure Cloud Computing Architecture (SCCA) compliant hub and spoke infrastructure.

* Designed for US Government mission customers
* Implements SCCA controls following Microsoft's SACA implementation guidance
* Deployable in Azure commercial, Azure Government, Azure Government Secret, and Azure Government Top Secret clouds
* A simple solution with low configuration and narrow scope
* Written as Bicep and Terraform templates

Mission Landing Zone is the right solution when:

* A simple, secure, and scalable hub and spoke infrastructure is needed.
* A central IT team is administering cloud resources on behalf of other teams and workloads.
* There is a need to implement SCCA.
* Hosting any workload requiring a secure environment, for example: data warehousing, AI/ML, and containerized applications.

Design goals include:

* A simple, minimal set of code that is easy to configure
* Good defaults that allow experimentation and testing in a single subscription
* Deployment via command line or with a user interface
* 100% Azure PaaS products

Our intent is to enable IT Admins to use this software to:

* Test and evaluate the landing zone using a single Azure subscription
* Develop a known good configuration that can be used for production with multiple Azure subscriptions
* Customize the deployment configuration to suit specific needs
* Deploy multiple customer workloads in production