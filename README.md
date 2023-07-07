# Admix-AI
Detecting genetic admixture using a Convolution Neurall Network (CNN) model.
# Description
Admix-AI that uses a 1-D (Dimensional) CNN to understand and classify admixed genetic backgrounds using DNA-marker based genetic background labels. Admix-AI can be used to discover admixed proportions in samples and ultimately aid personalized genomic medicine by identifying specific biomarker systems.
![AdmixAI_Overview]
(https://github.com/rpauly/Admix-AI/blob/main/AdmixAI_Overview.png)
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

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
├── example/                 # folder containing example input files
|   ├── data                      # folder with example data
|   ├── results                   # folder with example results
├── AIM_list/                     # folder containing lists of Ancestry Informative Markers (AIMs)
├── CNN_Models/                       # folder containing model weights
│   ├── cnn_AA_CAU.h5             # model weights for AA and CAU
│   ├── cnn_AA_AS.h5              # model weights for AA and AS
│   ├── cnn_CAU_AS.h5             # model weights for CAU and AS
│   ├── cnn_AA_CAU_AS.h5          # model weights for AA, CAU and AS
├── utils                         # Python helper scripts
└── ...
```


# Downloading Models
Download the model weights from the folder CNN_Models.

# Data Setup
Admix-AI accepts the genotype data in a CSV file format
