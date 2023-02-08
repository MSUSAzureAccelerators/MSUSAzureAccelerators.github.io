---
short_name: "ADX IoT Analytics"
name: "ADX IoT Analytics"
title: "ADX IoT Analytics"
accelerator_type: "Industry Customer Scenario"
classification: ""
solution_area: ""
status: "Beta"
primary_industry: "Manufacturing"
industries: "Automotive,Mobility & Transport,State & Local Government"
technology_stack: "Azure IoT Hub,Bicep,IoT,Digital Twins,Event Hub,Azure Data Explorer"
github_url: https://github.com/MSUSAzureAccelerators/ADX-IoT-Analytics-Accelerator
demo_url: 
customer_overview_url: ""
customer_deck_url: ""
short_text: "Azure Data Explorer can provide valuable insights into your IoT workloads."
hero_image: "assets/images/notfound.png"
partner_image: 
tags: "\"Industry Customer Scenario\",\"Manufacturing\",\"Automotive\",\"Mobility & Transport\",\"State & Local Government\",\"Azure IoT Hub\",\"Bicep\",\"IoT\",\"Digital Twins\",\"Event Hub\",\"Azure Data Explorer\",\"Beta\""
last_updated: "2023-02-08T18:18:51Z"
related: ""
order: 2
---
## About this Accelerator

Azure Data Explorer can provide valuable insights into your IoT workloads. This accelerator showcases what an IoT analytics solution would look like using simulated IoT Devices - it allows you to choose between two different demo solutions.

### ADX IoT Workshop
Deploy a completely configured environment where after deployment you’ll have simulated devices, an Azure Digital Twins representation, configured Azure Data Explorer cluster with both historical data (month of January) and new simulated data flowing in through Event Hub via IoT Central. This will allow you to get to the KQL query experience immediately after deployment.

- IoT Central Store Analytics Template
  - 36 thermostat devices being created and simulated
  - Setup Export to Event Hub of telemetry data
- Event Hub
  - Data exported from IoT Central
  - ADX Data Connection to ingest data
-  Azure Digital Twins
  - Office, Floors, and Thermostat twins
  - Atlanta, Dallas, Seattle offices with 6 Floors in each
  - 36  Thermostat twins created spread across the 3 offices with 2 on each floor
- Azure Data Explorer
  - Stage IoT Raw table where data lands from Event Hub to get new data
  - Thermostat table with update policy to transform raw data
  - Historical data from January 2022 loaded into Thermostat table
  - Two functions
    - GetDevicesbyOffice: query ADT by Office names to get all Device Ids at the office
    - GetDevicesbyOfficeFloor: query ADT by Office and Floor to get all Devices on that floor

### ADX IoT MicroHack
Deploys the components needed for your IoT Analytics and lets you experience setting up the Azure Data Explorer Cluster and configuring the data ingestion.

- IoT Central Logistics Template
  - 1000 logistic devices being created and simulated
  - Setup Export to Event Hub of telemetry data
- Event Hub
- Storage Account