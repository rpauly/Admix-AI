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

# Data structure
 ```  
├── example_data/                 # folder containing example input files
├── example_results/              # folder containing example output files
├── gene_lists/                   # folder containing lists for 19K and 60K genes
├── labels/                       # folder containing lists for 17 and 32 tumor types
├── models/                       # folder containing model weights
│   ├── cnn_17_pc_weights.h5      # model weights for 17 tumor types and 19K protein coding genes
│   ├── cnn_17_weights.h5         # model weights for 17 tumor types and 60K genes
│   ├── cnn_32_pc_weights.h5      # model weights for 32 tumor types and 19K protein coding genes
│   ├── cnn_32_weights.h5         # model weights for 32 tumor types and 60K genes
├── utils                         # Python helper scripts
├── environment.yml               # Python and libraries to run TULIP
├── modac_file_download.py        # Python script to download model weights from MoDaC
├── tulip.py                      # Python script of TULIP
└── ...
```


# Downloading Models
Download the model weights from the folder CNN_Models.

# Data Setup
Admix-AI accepts the genotype data in a CSV file format
