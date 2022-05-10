---
short_name: "Microsoft Purview ADB Lineage"
name: "Microsoft Purview ADB Lineage"
title: "Microsoft Purview ADB Lineage"
accelerator_type: "Technology Accelerator"
classification: "Process Automation"
solution_area: "Data & AI,Apps & Infrastructure"
status: "Submitted"
industries: "Horizontal"
technology_stack: "Purview,Databricks,C#,Python,Java,Event Hubs,Azure Functions,Azure Storage"
github_url: https://github.com/microsoft/Purview-ADB-Lineage-Solution-Accelerator
demo_url: 
customer_overview_url: 
customer_deck_url: 
short_text: "Provides a connector that will transfer lineage metadata from Spark operations in Azure Databricks to Azure Purview"
hero_image: 
tags: "\"Technology Accelerator\",\"Horizontal\",\"Purview\",\"Databricks\",\"C#\",\"Python\",\"Java\",\"Event Hubs\",\"Azure Functions\",\"Azure Storage\",\"Data & AI\",\"Apps & Infrastructure\""
last_updated: "May 05, 2022 03:37:40 PM"
related: Azure-Purview-ML-Lineage.html"
order: 2
---
## About this Solution Accelerator

Data lineage is the story of an organization’s data from the source, through all processes and changes, to storage or consumption. It provides a stepwise record of how data arrived at its current form, including both transformations made to the data and its journey through different business systems. A data lineage is essentially a map that can provide information such as:

* When the data was created and if alterations were made
* What information the data contains
* How the data is being used
* Where the data originated from
* Who used the data, and approved and actioned the steps in the lifecycle

The entire data flow is mapped to understand, document, and visualize data in all stages.

This solution accelerator, together with the OpenLineage project, provides a connector that will transfer lineage metadata from Spark operations in Azure Databricks to Azure Purview, allowing you to see a table-level lineage graph as demonstrated above.

### Gathering lineage data is performed in the following steps:

1. Azure Databricks clusters are configured to initialize the OpenLineage Spark Listener with an endpoint to receive data.
2. Spark operations will output data in a standard OpenLineage format to the endpoint configured in the cluster.
3. Endpoint provided by an Azure Function app that will filter incoming data and pass it to an Azure EventHub.
4. Events are captured by a second Function app to transform the data into a format compatible with Atlas and Purview.
5. Lineage data is synchronized with existing Purview metadata and uploaded to Purview using standard Apache Atlas APIs.
