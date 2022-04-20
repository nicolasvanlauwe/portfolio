<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProjectsController extends AbstractController
{
    /**
     * @Route("/projects",name="projects_show")
     */
    public function show()
    {
        return $this->render('projects/home.html.twig');
    }
}
