import Icon from '../Icon/Icon.component';
import React, {Component} from 'react';
import styles from './Projects.component.style';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo.component';
import ProjectTile from './ProjectTile.component';

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    isMobileView: PropTypes.bool,
    iconName: PropTypes.string,
    goToHome: PropTypes.func
  };
  render () {
    const {projects = [], goToHome, title = '', iconName = 'none', description = '', isMobileView = false} = this.props;
    return (
      <div style={styles.container}>
        <Logo onPress={goToHome}/>
        <div style={styles.titleContainer}>
          <Icon {...styles.icon} name={iconName} />
          <div style={styles.title}>{title}</div>
        </div>
        <div style={styles.description}>{description}</div>
        <div style={styles.projectContainer}>
          {
            projects.map((eachProject, i) => {
              const {name, imgUrl, starCount, url, topics, forkCount, description} = eachProject;
              return <ProjectTile key={i} name={name}
                imgUrl ={imgUrl}  url ={url}
                starCount ={starCount}  topics ={topics}
                forkCount ={forkCount}  description ={description} isMobileView={isMobileView}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default Projects;
