---
short_name: "ADX Patient Monitoring"
name: "ADX Patient Monitoring"
title: "ADX Patient Monitoring"
accelerator_type: "Industry Customer Scenario"
classification: ""
solution_area: ""
status: "Beta"
primary_industry: "Healthcare"
industries: "Automotive,Manufacturing,State & Local Government"
technology_stack: "Azure IoT Hub,Bicep,IoT,Digital Twins,Event Hub,Azure Data Explorer"
github_url: https://github.com/MSUSAzureAccelerators/ADX-Patient-Monitoring-Accelerator
demo_url: 
customer_overview_url: ""
customer_deck_url: ""
short_text: "Continuous patient monitoring to generate telemetry readings for two IoT consumer devices"
hero_image: "assets/images/Patient_Monitoring_Hero.webp"
partner_image: 
tags: "\"Industry Customer Scenario\",\"Healthcare\",\"Automotive\",\"Manufacturing\",\"State & Local Government\",\"Azure IoT Hub\",\"Bicep\",\"IoT\",\"Digital Twins\",\"Event Hub\",\"Azure Data Explorer\",\"Beta\""
last_updated: "2023-01-17T17:04:22Z"
related: ""
order: 2
---
## About this Accelerator

ADX Patient Monitoring accelerator leverages [Azure Bicep](https://docs.microsoft.com/EN-US/azure/azure-resource-manager/bicep/) and Azure CLI to automate the entire deployment to monitor a patient's vitals and knee brace readings.

<<<<<<< HEAD
The accelerator uses [Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central/) Continuous Patient Monitoring application to generate telemetry readings for two IoT Consumer devices: automated knee brace and vitals monitor patch. The generated data is automatically send to [Azure Event Hub](https://azure.microsoft.com/en-us/services/event-hubs/) and then send to [Azure Data Explorer](https://azure.microsoft.com/en-us/services/data-explorer/) for analysis. An [Azure Digital Twins](https://azure.microsoft.com/en-us/services/digital-twins/) service is used to store additional simulated devices metadata.
=======
The accelerator uses [Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central/) Continuous Patient Monitoring application to generate telemetry readings for two IoT Consumer devices: automated knee brace and vitals monitor patch. The generated data is automatically sent to [Azure Event Hub](https://azure.microsoft.com/en-us/services/event-hubs/) and then sent to [Azure Data Explorer](https://azure.microsoft.com/en-us/services/data-explorer/) for analysis. An [Azure Digital Twins](https://azure.microsoft.com/en-us/services/digital-twins/) service is used to store additional simulated devices metadata.
>>>>>>> dcea4da034acb9bcdc656c10fc365ee877d99b23

The Azure Data Explorer cluster is configured with a database, a set of tables to store telemetry data from both devices, and a set of functions to parse incoming data and to query data directly from the Azure Digital Twins service.

The accelerator includes a [Power BI](https://powerbi.microsoft.com/en-us/) report to visualize the data. Just download the file and open it in Power BI.