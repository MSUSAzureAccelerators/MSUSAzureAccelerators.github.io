---
short_name: "Knowledge Mining - AML"
name: "Knowledge Mining - AML"
title: "Knowledge Mining - AML"
accelerator_type: "Reusable Technology Accelerator"
classification: ""
solution_area: "Data & AI"
status: "Approved"
industries: "Manufacturing,FSI"
technology_stack: "Azure Machine Learning,Cognitive Search"
github_url: https://github.com/microsoft/Accelerator-AzureML_CognitiveSearch
demo_url: 
short_text: "Extract business or industry specific terms from documents, such as extracting medical terms from medical documents, legal terms from contracts, or part names from engineering documents."
hero_image: assets/images/Knowledge_Mining_AML_Hero.png
tags: "\"Reusable Technology Accelerator\",\"Manufacturing\",\"FSI\",\"Azure Machine Learning\",\"Cognitive Search\""
---
## About this Solution Accelerator

This repo walks through the process of creating a knowledge mining solution to enrich your data by identifying custom entities in a corpus of data using an AI custom skill. We'll leverage a number of capabilities in [Azure Cognitive Search](https://azure.microsoft.com/en-us/services/search/) and [Azure Machine Learning](https://azure.microsoft.com/en-us/services/machine-learning/) to extract entities from documents.

The solution will show you how to:

### 1. Create a labeled dataset using your documents (Steps 1-3)

1. Create a custom skill to label data for named entity recognition (NER)
2. Create an enrichment pipeline with Azure Cognitive Search that integrates the label skill to create labelled data from a corpus of documents.
3. Project the labeled data as a new dataset into the Cognitive Search [Knowledge Store](https://docs.microsoft.com/azure/search/knowledge-store-concept-intro) so that it can be used for training.

### 2. Train a BERT NER model (Steps 4-5)

> If you already have labelled data or want to use the sample data provided with this repo, you can skip ahead to Step 4.
4. Use the labeled data to train a Named Entity Recognition (NER) Model in Azure Machine Learning using a [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) model designed to extract entities from documents. The code used to train the model was derived from the [NLP Recipes Repo](https://github.com/microsoft/nlp-recipes).
5. Integrate the BERT NER custom skill with Azure Cognitive Search to project the identified entities and content of each document into the knowledge store and the search index.

![indexing documents](../assets/images/Knowledge_Mining_AML_Hero.png)

This is designed to be used in conjunction with the [Knowledge Mining Solution Accelerator](Knowledge-Mining.html). After you train and deploy the model, you can easily integrate the model with the solution accelerator to showcase the results in a Web App.
