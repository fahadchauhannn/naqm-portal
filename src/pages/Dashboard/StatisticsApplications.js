import React, { useState } from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import uploadIcon from "../../assets/images/upload.png"; // Import the upload icon image

const VideoUploader = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [showUpload, setShowUpload] = useState(true);

  const handleVideoUpload = (event) => {
    const selectedVideo = event.target.files[0];

    // Assuming you are using a function to upload the video to a server
    // Replace the following line with your actual upload logic
    uploadVideo(selectedVideo);
  };

  const uploadVideo = (video) => {
    // Simulating video upload delay (replace with actual upload logic)
    // setTimeout(() => {
    setUploadedVideo(URL.createObjectURL(video));
    setShowUpload(false); // Hide the upload section after successful upload
    // }, 9000);
  };

  return (
    <Col lg={12} style={{ height: "100%", width: "100%", position: "relative" }}>
      <Card>
        <CardBody style={{ textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          {showUpload ? (
            <div>
              <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <img src={uploadIcon} alt="Upload Icon" style={{ width: '50px', height: '50px' }} />
                <p>Click to Upload a Video</p>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          ) : (
            <div style={{ height: "100%", width: "100%", position: "relative" }}>
              <video width="100%" height="100%" controls>
                <source src={uploadedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </CardBody>
      </Card>
      <div style={{ width: '100%', height: '100%', position: "relative" }}>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: "pointer",
          }}
        />
        <label style={{ width: '100%' }}>
          <Button color="primary" style={{ cursor: "pointer", width: '100%' }}>
            Upload a Video <i className="fa fa-plus-circle" style={{}} />
          </Button>
        </label>
      </div>
    </Col>
  );
};

export default VideoUploader;
