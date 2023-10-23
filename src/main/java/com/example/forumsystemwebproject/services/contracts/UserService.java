package com.example.forumsystemwebproject.services.contracts;

import com.example.forumsystemwebproject.helpers.filters.CommentFilterOptions;
import com.example.forumsystemwebproject.helpers.filters.UserFilterOptions;
import com.example.forumsystemwebproject.models.User;

import java.util.List;

public interface UserService {

    User getById(int id);

    List<User> getAll(UserFilterOptions filterOptions);

    User getByUsername(String username);

    User getByEmail(String email);

    void create(User user);

    void update(User userToUpdate, User authenticatedUser);

    void delete(User user, int id);
}
