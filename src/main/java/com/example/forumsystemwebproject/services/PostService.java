package com.example.forumsystemwebproject.services;

import com.example.forumsystemwebproject.helpers.FilterOptions;
import com.example.forumsystemwebproject.models.Post;
import com.example.forumsystemwebproject.models.RegisteredUser;

import java.util.List;

public interface PostService {

    List<Post> get(FilterOptions filterOptions);

    Post getById(int id);

    void create(Post post, RegisteredUser user);

    void update(Post post, RegisteredUser user);

    void delete(int id, RegisteredUser user);
}