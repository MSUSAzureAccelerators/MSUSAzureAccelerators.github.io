---
short_name: "Azure Purview Custom Connector"
name: "Azure Purview Custom Connector"
title: "Azure Purview Custom Connector"
accelerator_type: "Reusable Technology Accelerator"
classification: "Process Automation"
solution_area: "Data & AI"
status: "Approved"
industries: "Horizontal"
technology_stack: "Synapse,Purview,Azure Data Lake Storage"
github_url: https://github.com/microsoft/Purview-Custom-Connector-Solution-Accelerator
demo_url: 
short_text: "Shorten most Purview Custom Connector MVP engagements from 4-6 weeks to 1-2 weeks."
hero_image: assets/images/Purview_Custom_Connector_Hero.svg
tags: "\"Reusable Technology Accelerator\",\"Process Automation\",\"Horizontal\",\"Synapse\",\"Purview\",\"Azure Data Lake Storage\""
last_updated: "April 14, 2022 02:10:41 PM"
related: "Azure-Purview-Custom-Types-Tool.html,Azure-Purview-Demo-Generator.html,Azure-Purview-ML-Lineage.html,Azure-Purview-Workshop.html"
---
## About this Solution Accelerator

Azure Purview is a unified data governance service that helps you manage and govern your on-premises, multi-cloud, and software-as-a-service (SaaS) data. Azure Purview Data Map provides the foundation for data discovery and effective data governance, however, no solution can support scanning metadata for all existing data sources or lineage for every ETL tool or process that exists today. That is why Purview was built for extensibility using the open Apache Atlas API set. This API set allows customers to develop their own scanning capabilities for data sources or ETL tools which are not yet supported out of the box. This Solution Accelerator is designed to jump start the development process and provide patterns and reusable tooling to help accelerate the creation of Custom Connectors for Azure Purview.

The accelerator includes documentation, resources and examples to inform about the custom connector development process, tools, and APIs. It further works with utilities to make it easier to create a meta-model for your connector (Purview Custom Types Tool) with examples including ETL tool lineage as well as a custom data source. It includes infrastructure / architecture to support scanning of on-prem and complex data sources using Azure Synapse Spark for compute and Synapse pipelines for orchestration.

## Applicability

There are multiple ways to integrate with Purview. Apache Atlas integration (as demonstrated in this Solution Accelerator) is appropriate for most integrations. For integrations requiring ingestion of a large amount of data into Purview / high scalability, it is recommended to integrate through the Purview Kafka endpoint. This will be demonstrated through an example in a future release of this accelerator.

The examples provided demonstrate how the design and services can be used to accelerate the creation of custom connectors, but are not designed to be generic production SSIS or Tag Database connectors. Work will be required to support specific customer use cases.
