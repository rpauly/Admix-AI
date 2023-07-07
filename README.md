# Admix-AI
Detecting genetic admixture using a Convolution Neurall Network (CNN) model.
# Description
Admix-AI that uses a 1-D (Dimensional) CNN to understand and classify admixed genetic backgrounds using DNA-marker based genetic background labels. Admix-AI can be used to discover admixed proportions in samples and ultimately aid personalized genomic medicine by identifying specific biomarker systems.

# Software Setup
To set up the Python environment for Admix-AI:

1. Install conda package manager.

2. Clone this repository.
   ```
   git clone https://github.com/rpauly/Admix-AI
   ```
4. Create the environment as shown below.
```
   conda env create -f environment.yml -n admixAI
   conda activate admixAI
```
These commands generate an initial folder structure without a models folder.

# Downloading Model Weights
# Data Setup
Admix-AI accepts the genotype data in a CSV file format
