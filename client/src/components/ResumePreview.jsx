import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'

const ResumePreview = ({data, template, accentColor, classes = ""}) => {

    const renderTemplate = ()=>{
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor}/>;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor}/>;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor}/>;

            default:
                return <ClassicTemplate data={data} accentColor={accentColor}/>;
        }
    }

  return (
    <div className='w-full bg-gray-100'>
      <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none " + classes}>
        {renderTemplate()}
      </div>

      <style jsx>
  {`
  @page {
    size: letter;
    margin: 0;
  }
  @media print {
    /* 1. Force Colors */
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }

    /* 2. Setup Page Layout */
    html, body {
      width: 210mm; /* Standard A4/Letter width */
      height: 297mm; 
      overflow: hidden;
      background: white !important;
    }

    /* 3. Hide everything except the resume */
    body * {
      visibility: hidden;
    }

    #resume-preview, #resume-preview * {
      visibility: visible;
    }

    /* 4. Position Resume on the PDF */
    #resume-preview {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin: 0 !important;
      padding: 0 !important;
      box-shadow: none !important;
      border: none !important;
    }

    /* 5. Clean up any links or buttons */
    a[href]:after {
      content: none !important;
    }
  }
  `}
</style>
    </div>
  )
}

export default ResumePreview
