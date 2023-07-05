# Admix-AI
Detecting genetic admixture using CNN
# Description
Admix-AI that uses a 1-D (Dimensional) convolutional neural network to understand and classify admixed genetic backgrounds using DNA-marker based genetic background labels. Admix-AI can be used to discover admixed proportions in samples and ultimately aid personalized genomic medicine by identifying specific biomarker systems.

#Software Setup
To set up the Python environment for Admix-AI:

Install conda package manager.

Clone this repository.

git clone https://github.com/rpauly/Admix-AI
Create the environment as shown below.

conda env create -f environment.yml -n admixAI
conda activate admixAI
These commands generate an initial folder structure without a models folder.

Downloading Model Weights
