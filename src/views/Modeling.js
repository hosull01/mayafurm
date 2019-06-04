import React from 'react';
import Gallery from 'react-grid-gallery';


export default class Modeling extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images,
            currentImage: 0
        }

        this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
    }

    onCurrentImageChange(index) {
        this.setState({ currentImage: index });
    }

    render () {
        return (
        <div className="modeling">
            <header>
                <div className="title">
                    <h2>Photoshoots</h2>
                </div>
            </header>
            <Gallery
                images={this.state.images}
                enableLightBox={true}
                enableImageSelection={false}
                currentImageWillChange={this.onCurrentImageChange}
            />
        </div>
        )
    }

}




Modeling.defaultProps = {
    images:  [
        {
            src: require("../images/modeling/photos/maya_magazine.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_magazine_311_400.JPG"),
            thumbnailWidth: 311,
            thumbnailHeight: 400,
            caption: "Maya in a magazine, November 2018",
        }, 
        {
            src: require("../images/modeling/photos/maya_bobcut.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_bobcut_300_224.JPG"),
            thumbnailWidth: 300,
            thumbnailHeight: 224,
            caption: "Maya with a bobcut, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_red_coat.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_red_coat_320_399.JPG"),
            thumbnailWidth: 320,
            thumbnailHeight: 399,
            caption: "Maya in a red coat, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_pizza.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_pizza_300_221.JPG"),
            thumbnailWidth: 300,
            thumbnailHeight: 211,
            caption: "Maya at Pizza Slice, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_naoshima.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_naoshima_492_320.JPG"),
            thumbnailWidth: 492,
            thumbnailHeight: 320,
            caption: "Maya in Naoshima, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_earings.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_earings_270_338.JPG"),
            thumbnailWidth: 270,
            thumbnailHeight: 338,
            caption: "Maya with earrings, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_summer.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_summer_320_216.JPG"),
            thumbnailWidth: 320,
            thumbnailHeight: 216,
            caption: "Maya during summer, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_train.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_train_330_329.JPG"),
            thumbnailWidth: 330,
            thumbnailHeight: 329,
            caption: "Maya looking at a train, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_yelloshirt.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_yelloshirt_300_229.JPG"),
            thumbnailWidth: 300,
            thumbnailHeight: 229,
            caption: "Maya in a yello shirt, November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_japanese.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_japanese_492_320.JPG"),
            thumbnailWidth: 492,
            thumbnailHeight: 320,
            caption: "Maya in Naoshima (part 2), November 2018"
        },
        {
            src: require("../images/modeling/photos/maya_sunglasses.JPG"),
            thumbnail: require("../images/modeling/thumbnails/maya_sunglasses_492_320.JPG"),
            thumbnailWidth: 492,
            thumbnailHeight: 320,
            caption: "Maya in sunglasses, November 2018"
        }
    ]
}
