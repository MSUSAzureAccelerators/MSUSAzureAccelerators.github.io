---
short_name: "ADX Patient Monitoring"
name: "ADX Patient Monitoring"
title: "ADX Patient Monitoring"
accelerator_type: "Industry Customer Scenario"
classification: "Process Automation"
solution_area: "Data & AI"
status: "Beta"
primary_industry: "Health & Life Sciences"
industries: "Automotive,Manufacturing,State & Local Government"
technology_stack: "Azure IoT Hub,Bicep,IoT,Digital Twins,Event Hub,Azure Data Explorer"
github_url: https://github.com/MSUSAzureAccelerators/ADX-Patient-Monitoring-Solution-Accelerator
demo_url: 
customer_overview_url: 
customer_deck_url: 
short_text: "Continuous Patient Monitoring solution to generate telemetry readings for two IoT Consumer devices"
hero_image: assets/images/Patient_Monitoring_Hero.webp
partner_image: 
tags: "\"Industry Customer Scenario\",\"Process Automation\",\"Health & Life Sciences\",\"Automotive\",\"Manufacturing\",\"State & Local Government\",\"Azure IoT Hub\",\"Bicep\",\"IoT\",\"Digital Twins\",\"Event Hub\",\"Azure Data Explorer\",\"Data & AI\",\"Beta\""
last_updated: "2022-09-06T19:05:46Z"
related: ""
order: 2
---
## About this Accelerator

How to use ADX to monitor a patient's vitals and knee brace readings. It leverages [Azure Bicep](https://docs.microsoft.com/EN-US/azure/azure-resource-manager/bicep/) and the Azure CLI to automate the entire deployment.

The accelerator uses [Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central/) Continuous Patient Monitoring application to generate telemetry readings for two IoT Consumer devices: automated knee brace and a vitals monitor patch. The generated data is automatically sent to an [Azure Event Hub](https://azure.microsoft.com/en-us/services/event-hubs/) and then sent to an [Azure Data Explorer](https://azure.microsoft.com/en-us/services/data-explorer/) for analysis.

An [Azure Digital Twins](https://azure.microsoft.com/en-us/services/digital-twins/) service is used to store additional simulated devices metadata.

The Azure Data Explorer cluster is configured with a database, a set of tables to store telemetry data from both devices, and a set of functions to parse incoming data and to query data directly from the Azure Digital Twins service.

The accelerator includes a [Power BI](https://powerbi.microsoft.com/en-us/) report to visualize the data. Just download the file and open it in Power BI.