import React from 'react'

export default function VimeoSection() {
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-8">
                <iframe 
                width="872px"
                height="314px"
                src="https://player.vimeo.com/video/386648582?h=28677dd262&amp;title=0&amp;app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="NAVI Introduction and Overview" data-ready="true"></iframe>
            </div>
            
            <div className="col-md-4">

                <h4>
                Watch this short video to learn how NAVI can help your organization.
                </h4>

                <button className="btn btn-primary">
                    Request a live demo
                </button>
            </div>
        </div>
    </div>
  )
}
