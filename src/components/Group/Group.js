import './Group.css';

 function Group({image,image2x,imageWebp,imageWebp2x,title,subtitle,step,width,height}) {
              let size = {wisth:width,height:height}
                return (
                    <div className="process__group group">
                    <div className="group__img">
                        <picture>
                            <source type='image/webp' srcSet={`${imageWebp} 1x, ${imageWebp2x} 2x`}/>
                             <img className='group__img-item' style={size} src={image} srcSet={`${image2x} 2x`} alt="Зображення кроків" />
                        </picture>
                    </div>
                    <div className="group__content">
                      <div className="group__step">{step}</div>
                        <div className="group__text-wrap">
                          <span className='group__title'>{title}</span>
                          <span className='group__subtitle'>{subtitle}</span>
                        </div>
                    </div>
                  </div>
               );
             }
             
export default Group;