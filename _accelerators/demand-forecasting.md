---
short_name: "Demand Forecasting"
name: "Demand Forecasting"
title: "Demand Forecasting"
accelerator_type: "Industry Customer Scenario"
classification: ""
solution_area: "Data & AI"
status: "In Progress"
primary_industry: "Manufacturing"
industries: "Horizontal"
technology_stack: "Azure Cosmos DB,Power BI,Azure Machine Learning,Azure Synapse Analytics,Azure Storage"
github_url: https://github.com/microsoft/solution-accelerator-many-models
demo_url: 
customer_overview_url: 
customer_deck_url: 
short_text: "Determine how much demand there will be for a product at to optimize inventory and material/product orders."
hero_image: assets/images/Many_Models_Demand_Forecasting_Hero.png
partner_image: 
tags: "\"Industry Customer Scenario\",\"Azure Cosmos DB\",\"Power BI\",\"Azure Machine Learning\",\"Azure Synapse Analytics\",\"Azure Storage\",\"In Progress\""
last_updated: "2022-10-26T13:09:37Z"
related: ""
order: 2
---
## Business Summary

Demand forecasting is one of the top use cases for predictive analytics, with applications for virtually every organization around the globe. Demand forecasting analyzes and predicts customer demand to optimize sales/marketing, manufacturing, and supply chain decisions. Demand forecasting involves applying statistical techniques to historical sales/demand data and other customer and market data to estimate what future demand looks like. The Demand Forecasting Solution Accelerator enables organizations to quickly create a robust demand forecasting capability that applies a variety of statistical techniques and models to provide a better view into future need.

## Use Case

### Inventory Management | Operating Analytics

This solution is great for customers looking to improve their ability to forecast customer demand and/or has experienced operational issues associated with poor demand forecasting. These issues can include lost revenue due to inventory shortages/stockout, high levels of inventory obsolescence or write-offs, and low customer satisfaction, among others.

## What is it?

As customers mature through their ML journey, we are seeing a pattern of "many models" emerging. Instead of training a single model to make predictions for all instances (could be product sku, retail store, oil well, wind turbine, ATM etc.), customers end up slicing data per instance and training a custom model per each of those instances. We are seeing many customers with this pattern and this pattern is poised to be a competitive differentiator for Azure Machine Learning due to our end-to-end capabilities.

## What can it do?

This Solution Accelerator has a wide range of use cases across many industries. A few examples are listed below:

* A retail organization with several stores and products at each store building sales forecasting model at store level and/or product SKU level
* A retail organization with several suppliers and product brands building propensity and marketing campaign models per each brand or product
* An energy conglomerate with hundreds of wind turbines and wind farms building model per Wind Turbine
* A utility company with several hundred thousands of smart meters building energy forecasting model per smart meter

## How does it work?

The Many Models Solution Accelerator uses orange juice sales data consisting of multiple brands in multiple stores similar to a retail organization with multiple stores, and multiple product SKUs in each store. It showcases how to build a customized sales forecasting model for each brand of orange juice and then use these trained models for forecasting future demand. The Solution Accelerator walks through the process of configuring your environment, preparing your dataset, training 10,000+ models, and then forecasting orange juice sales. From there, it can be further customized for your customer’s business problem whether it’s a classification, regression or forecasting.

To tackle the training and inferencing of thousands of models, the accelerator leverages Azure Machine Learning Compute cluster and parallelizes the training and inferencing jobs across multiple nodes and multiple cores of the Cluster VMs. This parallelism helps scale the solution to build, train, store, use and maintain the whole life cycle of large number of models on Azure Machine Learning platform.