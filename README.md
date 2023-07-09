# Admix-AI
Detecting genetic admixture using a Convolution Neurall Network (CNN) model.
# Description
Admix-AI that uses a 1-D (Dimensional) CNN to understand and classify admixed genetic backgrounds using DNA-marker based genetic background labels. Admix-AI can be used to discover admixed proportions in samples and ultimately aid personalized genomic medicine by identifying specific biomarker systems.
![AdmixAI_Overview.](https://github.com/rpauly/Admix-AI/blob/main/AdmixAI_Overview.png)

# Software Setup
To set up the Python environment for Admix-AI:

1. Install conda package manager.

2. Clone this repository.
   ```
   git clone https://github.com/rpauly/Admix-AI
   ```
4. Create the environment as shown below.
```
   conda env create -f environment.yml -n AdmixAI
   conda activate AdmixAI
```
These commands generate an initial folder structure without a models folder.

# Data structure
 ```  
├── example/                 # folder containing example input files
|   ├── data                      # folder with example data
|   ├── results                   # folder with example results
├── AIM_list/                     # folder containing lists of Ancestry Informative Markers (AIMs)
├── CNN_Models/                       # folder containing model weights
│   ├── RCNN_AA_CAU.model.h5             # model weights for AA and CAU
│   ├── RCNN_AA_AS.model.h5              # model weights for AA and AS
│   ├── RCNN_CAU_AS.model.h5             # model weights for CAU and AS
│   ├── RCNN_AA_CAU_AS.model.h5          # model weights for AA, CAU and AS
├── utils                         # Python helper scripts
└── ...
```

# Downloading Models
Download the model weights from the folder CNN_Models as indicated above in the data structure.

# Data Setup
Admix-AI requires two inputs.
1. The genotype data in a CSV file format

| rs_id | Sample 1 | Sample2 |
| --- | --- | --- |
| rs_id1 | 0 | 1 |
| rs_id2 | 1 |  2 |


 Please note that the rsIDs are the list 213 Ancestry Informative Markers(AIMs) located in the folder AIM_list. Make sure to select those AIMs in the exact order listed. 
The genotypes were integer values ranging from 0 to 2, across all groups, homozygous SNPs were assigned a value of ”0,” heterozygous SNPs were given a value of ”1,” and homozygous alleles assigned the value of ”2". We then used Javarkit to convert the vcf to a genotype matrix using the following command.
```
java -jar <path_to_kit>/jvarkit/dist/bioalcidae.jar -F VCF -f <path_to_js>/filter.js <path_to_file>/input.genotypes.vcf >matrix.tab

```


2. List of input samples with headers.

# Running Admix-AI
Please use the python notebook listed in the folder utilis to see the step-by-step running of admix-AI.

# Acknowledgments
Clemson University is acknowledged for general computing on the Palmetto cluster. We thank the producers of 1000 Genomes and GTEx data.

