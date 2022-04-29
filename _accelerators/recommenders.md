---
short_name: "Recommenders"
name: "Recommenders"
title: "Recommenders"
accelerator_type: "Technology Accelerator"
classification: "Personalization"
solution_area: "Data & AI,BizApps"
status: "Approved"
industries: "Automotive,EDU,Energy,FSI,High Tech,HLS,Manufacturing,Media and Entertainment,Professional Services,Retail,SLG,Horizontal"
technology_stack: ""
github_url: https://github.com/microsoft/recommenders
demo_url: 
customer_overview_url: 
customer_deck_url: 
short_text: "Examples and best practices for building recommendation systems"
hero_image: assets/images/Recommenders_Hero.webp
tags: "\"Technology Accelerator\",\"Personalization\",\"Automotive\",\"EDU\",\"Energy\",\"FSI\",\"High Tech\",\"HLS\",\"Manufacturing\",\"Media and Entertainment\",\"Professional Services\",\"Retail\",\"SLG\",\"Horizontal\",\"Data & AI\",\"BizApps\""
last_updated: "April 29, 2022 06:43:34 PM"
related: "Azure-Intelligent-Recommendations.html,Content-Recommendations.html,Retail-Recommender.html"
order: 2
---
## About this Technology Accelerator

This repository contains examples and best practices for building recommendation systems, provided as Jupyter notebooks. The examples detail our learnings on five key tasks:

- [Prepare Data](https://github.com/microsoft/recommenders/blob/main/examples/01_prepare_data): Preparing and loading data for each recommender algorithm
- [Model](https://github.com/microsoft/recommenders/blob/main/examples/00_quick_start): Building models using various classical and deep learning recommender algorithms such as Alternating Least Squares ([ALS](https://spark.apache.org/docs/latest/api/python/_modules/pyspark/ml/recommendation.html#ALS)) or eXtreme Deep Factorization Machines ([xDeepFM](https://arxiv.org/abs/1803.05170)).
- [Evaluate](https://github.com/microsoft/recommenders/blob/main/examples/03_evaluate): Evaluating algorithms with offline metrics
- [Model Select and Optimize](https://github.com/microsoft/recommenders/blob/main/examples/04_model_select_and_optimize): Tuning and optimizing hyperparameters for recommender models
- [Operationalize](https://github.com/microsoft/recommenders/blob/main/examples/05_operationalize): Operationalizing models in a production environment on Azure

Several utilities are provided in [recommenders](https://github.com/microsoft/recommenders/blob/main/recommenders) to support common tasks such as loading datasets in the format expected by different algorithms, evaluating model outputs, and splitting training/test data. Implementations of several state-of-the-art algorithms are included for self-study and customization in your own applications. See the [recommenders documentation](https://readthedocs.org/projects/microsoft-recommenders/).

For a more detailed overview of the repository, please see the documents on the [wiki page](https://github.com/microsoft/recommenders/wiki/Documents-and-Presentations).

## Related projects

- [Microsoft AI Github](https://github.com/microsoft/ai): Find other Best Practice projects, and Azure AI design patterns in our central repository.
- [NLP best practices](https://github.com/microsoft/nlp-recipes): Best practices and examples on NLP.
- [Computer vision best practices](https://github.com/microsoft/computervision-recipes): Best practices and examples on computer vision.
- [Forecasting best practices](https://github.com/microsoft/forecasting): Best practices and examples on time series forecasting.
